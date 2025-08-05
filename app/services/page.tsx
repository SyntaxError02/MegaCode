import { ServicesHero } from "@/components/services/hero"
import { SolutionsOverview } from "@/components/services/solutions-overview"
import { MegaCodeMethod } from "@/components/services/megacode-method"
import { ServicesCTA } from "@/components/services/cta-section"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <ServicesHero />
      <SolutionsOverview />
      <MegaCodeMethod />
      <ServicesCTA />
    </main>
  )
}
