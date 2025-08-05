import { AboutHero } from "@/components/about/hero"
import { OurStory } from "@/components/about/our-story"
import { GuidingPrinciples } from "@/components/about/guiding-principles"
import { OurImpact } from "@/components/about/our-impact"
import { ClientTestimonials } from "@/components/about/client-testimonials"
import { GetStarted } from "@/components/about/get-started"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <AboutHero />
      <OurStory />
      <GuidingPrinciples />
      <OurImpact />
      <ClientTestimonials />
      <GetStarted />
    </main>
  )
}
