import { CaseStudyCard } from "./case-study-card"
import { Clock, DollarSign, TrendingUp, Users, Zap, Target } from "lucide-react"

const caseStudies = [
  {
    slug: "indeed-experience",
    title: "From Startup to IPO",
    subtitle: "How We Scaled Engineering Through Hypergrowth",
    client: "Indeed (Personal Experience)",
    industry: "Job Search Platform",
    timeline: "5 Years",
    keyMetrics: [
      { icon: Users, value: "200M+", label: "Monthly Users" },
      { icon: TrendingUp, value: "IPO", label: "Exit Success" },
      { icon: Zap, value: "5x", label: "Team Growth" },
    ],
    challenge:
      "Scaling engineering teams and infrastructure during explosive user growth while maintaining product quality and engineering culture.",
    result:
      "Successfully scaled from startup to IPO, handling 200M+ monthly users with world-class engineering practices and team culture.",
    services: ["Engineering Leadership", "Team Scaling", "Technical Strategy", "Culture Building"],
  },
  {
    slug: "ultiblob",
    title: "10x Engineer in 72 Hours",
    subtitle: "Emergency Azure Expertise at 30% Local Cost",
    client: "UltiBlob",
    industry: "Cloud Infrastructure",
    timeline: "72 Hours",
    keyMetrics: [
      { icon: Clock, value: "72hrs", label: "Time to Hire" },
      { icon: DollarSign, value: "70%", label: "Cost Savings" },
      { icon: Target, value: "$2.5M", label: "Contracts Saved" },
    ],
    challenge:
      "Multiple enterprise contracts at risk due to lack of specialized Azure and Hyper-V expertise. Needed immediate deployment with local market quoting $150k+ and 3-month timelines.",
    result:
      "Delivered certified Azure expert in 72 hours at $35/hour. Migrated 200+ VMs, achieved 99.99% uptime, and saved $500k annually in disaster recovery costs.",
    services: ["Talent Strategy", "Technical Recruitment", "Legal & Compliance", "Complete Onboarding"],
  },
  {
    slug: "primitive-haus",
    title: "Vision to Exit in 24 Months",
    subtitle: "Built Watch Brand That Pre-Sold 200 Units",
    client: "Primitive Haus",
    industry: "Luxury Goods",
    timeline: "24 Months",
    keyMetrics: [
      { icon: TrendingUp, value: "$2.4M", label: "ARR at Exit" },
      { icon: Users, value: "200", label: "Pre-Launch Sales" },
      { icon: Target, value: "8-Fig", label: "Acquisition" },
    ],
    challenge:
      "Solo technical founder with compelling vision but no business expertise, team, or go-to-market strategy in the crowded luxury watch market.",
    result:
      "Complete business transformation from concept to 8-figure acquisition. Built entire team, achieved $2.4M ARR, and created sustainable D2C luxury brand model.",
    services: ["Strategy Consulting", "Co-founder Matching", "Complete Team Building", "Digital Marketing"],
  },
]

export function CaseStudiesOverview() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Success Stories Across
            <span className="text-red-600"> Every Challenge</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency talent placement to complete business transformation, see how MegaCode delivers results that
            matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}
