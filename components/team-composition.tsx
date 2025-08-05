import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const teamMembers = [
  { role: "Senior Product Manager", count: 1 },
  { role: "Frontend Developers", count: 2 },
  { role: "Backend Developers", count: 2 },
  { role: "UI/UX Designer", count: 1 },
  { role: "QA Engineer", count: 1 },
  { role: "Dedicated Scrum Master", count: 1 },
]

const comparisons = [
  { option: "US Team", cost: "$75,000+/month", color: "text-red-600" },
  { option: "Freelancers", cost: "Coordination nightmare", color: "text-red-600" },
  { option: "Other Offshore", cost: "No real-time collaboration", color: "text-red-600" },
]

export function TeamComposition() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Your Complete Scrum Team for
            <span className="text-red-600"> $25k/month</span>
          </h2>
          <p className="text-xl text-gray-600">One invoice, one point of contact, complete team dynamics</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Team Composition */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">What You Get</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-900">{member.role}</span>
                  </div>
                  <span className="text-green-600 font-bold">×{member.count}</span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-green-800">Total Monthly Cost</span>
                  <span className="text-2xl font-bold text-green-600">$25,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Compare That To</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparisons.map((comp, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-900">{comp.option}</span>
                  <span className={`font-bold ${comp.color}`}>{comp.cost}</span>
                </div>
              ))}

              <div className="mt-8 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Pre-built team dynamics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>6-8 hours daily overlap</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>4-year average retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Scale up/down monthly</span>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white mt-6">
                Calculate Your Team Cost
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
