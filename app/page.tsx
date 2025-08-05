import { HeroSectionAnimated } from "@/components/hero-section-animated"
import { SocialProof } from "@/components/social-proof"
import { AccelerationEngine } from "@/components/acceleration-engine"
import { JourneyTimeline } from "@/components/journey-timeline"
import { ServicesOverview } from "@/components/services-overview"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { CTABanner } from "@/components/cta-banner"

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSectionAnimated />
      <SocialProof />
      <AccelerationEngine />
      <JourneyTimeline />
      <ServicesOverview />
      <PerformanceMetrics />
      <CTABanner />
    </main>
  )
}
