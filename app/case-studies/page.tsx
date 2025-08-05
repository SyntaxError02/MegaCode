import { CaseStudiesHero } from "@/components/case-studies/hero"
import { CaseStudiesOverviewRedesign } from "@/components/case-studies/overview-redesign"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <CaseStudiesHero />
      <CaseStudiesOverviewRedesign />
    </main>
  )
}
