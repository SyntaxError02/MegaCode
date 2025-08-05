import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Award } from "lucide-react"

const solutions = [
  {
    icon: Award,
    title: "Rigorous Vetting",
    description: "Only 3% make the cut",
    detail: "Multi-stage technical and cultural assessments",
  },
  {
    icon: Shield,
    title: "Legal Protection",
    description: "IP-secure, compliant contracts",
    detail: "Full legal framework and intellectual property protection",
  },
  {
    icon: CheckCircle,
    title: "Operational Excellence",
    description: "Dedicated support, daily standups, monitored performance",
    detail: "Complete project management and quality assurance",
  },
]

export function SolvedChallenges() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            We've Solved
            <span className="text-red-600"> the Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every concern you have about working with global talent — we've addressed it systematically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <solution.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{solution.title}</h3>
                <div className="text-red-600 font-semibold mb-4">{solution.description}</div>
                <p className="text-gray-600 text-sm">{solution.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
