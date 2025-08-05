import { WhyUsHero } from "@/components/why-us/hero"
import { RealTimeCollaboration } from "@/components/why-us/real-time-collaboration"
import { CommunicationAdvantage } from "@/components/why-us/communication-advantage"
import { TeamRetention } from "@/components/why-us/team-retention"
import { TrueValue } from "@/components/why-us/true-value"
import { DifferentPerspectives } from "@/components/why-us/different-perspectives"
import { ProfessionalInfrastructure } from "@/components/why-us/professional-infrastructure"
import { ScaleWithoutHeadache } from "@/components/why-us/scale-without-headache"
import { SolvedChallenges } from "@/components/why-us/solved-challenges"
import { WhyUsBottomLine } from "@/components/why-us/bottom-line"

export default function WhyUsPage() {
  return (
    <main className="min-h-screen">
      <WhyUsHero />
      <RealTimeCollaboration />
      <CommunicationAdvantage />
      <TeamRetention />
      <TrueValue />
      <DifferentPerspectives />
      <ProfessionalInfrastructure />
      <ScaleWithoutHeadache />
      <SolvedChallenges />
      <WhyUsBottomLine />
    </main>
  )
}
