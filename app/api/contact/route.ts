import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required').max(1000, 'Message too long'),
  company: z.string().max(100, 'Company name too long').optional(),
  // Honeypot field for bot protection
  website: z.string().max(0, 'Invalid field').optional(),
});

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';
    const limiter = rateLimit();
    
    try {
      await limiter.check(5, ip); // 5 requests per minute per IP
    } catch {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' }, 
        { status: 429 }
      );
    }

    // 2. Input validation
    const body = await req.json();
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid input data.' }, 
        { status: 400 }
      );
    }

    const { name, email, message, company, website } = validationResult.data;

    // 3. Honeypot check (if website field is filled, it's likely a bot)
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 }); // Fake success
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipients = [
      process.env.CONTACT_EMAIL_1,
      process.env.CONTACT_EMAIL_2,
    ].filter(Boolean).join(',');

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: recipients,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
} 