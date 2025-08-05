import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    category: "Cost & Value",
    items: [
      {
        feature: "Monthly Team Cost",
        megacode: "$15-25k",
        indian: "$12-20k",
        us: "$50-80k",
        freelancers: "$10-30k",
        megacodeGood: true,
        indianGood: true,
        usGood: false,
        freelancersGood: true,
      },
      {
        feature: "Hidden Coordination Costs",
        megacode: "None",
        indian: "High",
        us: "Medium",
        freelancers: "Very High",
        megacodeGood: true,
        indianGood: false,
        usGood: false,
        freelancersGood: false,
      },
    ],
  },
  {
    category: "Collaboration",
    items: [
      {
        feature: "EU Timezone Overlap",
        megacode: "6-8 hours",
        indian: "0-2 hours",
        us: "4-6 hours",
        freelancers: "Varies",
        megacodeGood: true,
        indianGood: false,
        usGood: true,
        freelancersGood: false,
      },
      {
        feature: "Real-time Communication",
        megacode: "Native English",
        indian: "Variable Quality",
        us: "Native English",
        freelancers: "Variable",
        megacodeGood: true,
        indianGood: false,
        usGood: true,
        freelancersGood: false,
      },
    ],
  },
  {
    category: "Team Stability",
    items: [
      {
        feature: "Average Retention",
        megacode: "4 years",
        indian: "1-2 years",
        us: "2-3 years",
        freelancers: "3-6 months",
        megacodeGood: true,
        indianGood: false,
        usGood: true,
        freelancersGood: false,
      },
      {
        feature: "Complete Teams",
        megacode: "Yes",
        indian: "No",
        us: "No",
        freelancers: "No",
        megacodeGood: true,
        indianGood: false,
        usGood: false,
        freelancersGood: false,
      },
    ],
  },
]

export function DetailedComparison() {
  const getIcon = (isGood: boolean) => {
    if (isGood) return <Check className="w-5 h-5 text-green-600" />
    return <X className="w-5 h-5 text-red-600" />
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            MegaCode vs
            <span className="text-red-600"> The Alternatives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why smart startups choose complete African teams over fragmented alternatives.
          </p>
        </div>

        <div className="space-y-12">
          {comparisonData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden border-2">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left p-4 font-semibold min-w-[200px]">Feature</th>
                        <th className="text-center p-4 font-semibold bg-red-50 min-w-[150px]">🌍 MegaCode</th>
                        <th className="text-center p-4 font-semibold min-w-[150px]">🇮🇳 Indian Firms</th>
                        <th className="text-center p-4 font-semibold min-w-[150px]">🇺🇸 US Hiring</th>
                        <th className="text-center p-4 font-semibold min-w-[150px]">👥 Freelancers</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="border-b hover:bg-gray-50">
                          <td className="p-4 font-medium">{item.feature}</td>
                          <td className="p-4 text-center bg-red-50">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              {getIcon(item.megacodeGood)}
                            </div>
                            <div className="font-semibold text-sm">{item.megacode}</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              {getIcon(item.indianGood)}
                            </div>
                            <div className="text-sm">{item.indian}</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">{getIcon(item.usGood)}</div>
                            <div className="text-sm">{item.us}</div>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2 mb-1">
                              {getIcon(item.freelancersGood)}
                            </div>
                            <div className="text-sm">{item.freelancers}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black mb-4">The MegaCode Advantage</h3>
              <p className="text-gray-700 mb-6">
                We're not the cheapest option, but we deliver the best value through complete teams, cultural alignment,
                and proven retention.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>One contract, entire team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>4-year average retention</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Perfect timezone alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>Gateway to African markets</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
