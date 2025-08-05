# MegaCode Website

A modern, responsive website for MegaCode LLC built with Next.js, TypeScript, and Tailwind CSS.

## Environment Variables

To enable contact form email functionality, create a `.env.local` file in the root directory with the following variables:

```bash
# Contact form recipient emails
CONTACT_EMAIL_1=Kolade.alabi@megacodellc.com
CONTACT_EMAIL_2=support@megacodellc.com

# SMTP configuration (example for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
```

### Email Provider Options:

**Gmail:**
- SMTP_HOST=smtp.gmail.com
- SMTP_PORT=587
- Use App Password (not regular password)

**SendGrid:**
- SMTP_HOST=smtp.sendgrid.net
- SMTP_PORT=587
- Use SendGrid API key as password

**Resend:**
- SMTP_HOST=smtp.resend.com
- SMTP_PORT=587
- Use Resend API key as password

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see above)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Modern, responsive design
- Contact form with email delivery
- Animated components
- SEO optimized
- Fast performance 