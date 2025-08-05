import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Target, Clock } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "No constant retraining",
    description: "Your team knows your codebase, processes, and preferences",
  },
  {
    icon: TrendingUp,
    title: "Deeper product understanding",
    description: "Long-term team members become product experts and strategic partners",
  },
  {
    icon: Target,
    title: "Stable team dynamics",
    description: "Established workflows and communication patterns that just work",
  },
  {
    icon: Clock,
    title: "Predictable delivery",
    description: "Consistent velocity and reliable sprint planning with experienced teams",
  },
]

export function TeamRetention() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Teams That Stay,
            <span className="text-red-600"> Knowledge That Grows</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            While other markets churn talent every 12–18 months, our professionals average over 4 years per engagement.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">Why this matters:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black mb-2">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="text-4xl font-bold text-red-600">4+</div>
            <div>
              <div className="font-semibold text-black">Years Average Retention</div>
              <div className="text-gray-600">vs 12-18 months industry standard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
