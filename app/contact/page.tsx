import { ContactHero } from "@/components/contact/hero"
import { MainContactForm } from "@/components/contact/main-form"
import { ProcessTimeline } from "@/components/contact/process-timeline"
import { FAQSection } from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <ContactHero />
      <MainContactForm />
      <ProcessTimeline />
      <FAQSection />
    </main>
  )
}
