import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, DollarSign, Users, Star, Target } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "3",
    label: "Successful Exits",
    description: "IPO + 2 Acquisitions",
  },
  {
    icon: Clock,
    value: "72hrs",
    label: "Fastest Placement",
    description: "Emergency talent delivery",
  },
  {
    icon: DollarSign,
    value: "$50M+",
    label: "Value Created",
    description: "Across all engagements",
  },
  {
    icon: Users,
    value: "200+",
    label: "Professionals Placed",
    description: "Across 3 continents",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Satisfaction",
    description: "Average NPS score",
  },
  {
    icon: Target,
    value: "100%",
    label: "Project Success",
    description: "Goals achieved",
  },
]

export function StatsBanner() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            The Numbers
            <span className="text-red-600"> Tell the Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real engagements. These aren't projections—they're outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
