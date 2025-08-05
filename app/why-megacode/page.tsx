import { Hero } from "@/components/why-megacode/hero"
import { FoundationOfExcellence } from "@/components/why-megacode/foundation-of-excellence"
import { BeyondCode } from "@/components/why-megacode/beyond-code"
import { GrowthPlaybook } from "@/components/why-megacode/growth-playbook"
import { Cta } from "@/components/why-megacode/cta"

export default function WhyMegaCodePage() {
  return (
    <div className="bg-black">
      <Hero />
      <FoundationOfExcellence />
      <BeyondCode />
      <GrowthPlaybook />
      <Cta />
    </div>
  )
}
