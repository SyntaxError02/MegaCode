import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisonData = [
  {
    feature: "Timezone Overlap with US/EU",
    africa: true,
    india: false,
    africaDetail: "Perfect overlap (6-8 hours)",
    indiaDetail: "Minimal overlap (2-4 hours)",
  },
  {
    feature: "English Communication",
    africa: true,
    india: true,
    africaDetail: "Native/Fluent speakers",
    indiaDetail: "Good but accent barriers",
  },
  {
    feature: "Cultural Alignment",
    africa: true,
    india: false,
    africaDetail: "Western business culture",
    indiaDetail: "Different work culture",
  },
  {
    feature: "Talent Retention",
    africa: true,
    india: false,
    africaDetail: "4+ years average",
    indiaDetail: "1-2 years average",
  },
  {
    feature: "Cost Effectiveness",
    africa: true,
    india: true,
    africaDetail: "60% savings vs US/EU",
    indiaDetail: "70% savings vs US/EU",
  },
]

export function QuickComparison() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Africa vs India
            <span className="text-red-600"> Outsourcing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why smart startups are choosing African talent over traditional outsourcing destinations.
          </p>
        </div>

        <Card className="overflow-hidden border-2">
          <CardHeader className="bg-black text-white">
            <CardTitle className="text-center text-2xl">Comparison Overview</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-6 font-bold text-lg">Feature</th>
                    <th className="text-center p-6 font-bold text-lg bg-red-50">🌍 Africa (MegaCode)</th>
                    <th className="text-center p-6 font-bold text-lg">🇮🇳 India</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-6 font-semibold">{item.feature}</td>
                      <td className="p-6 text-center bg-red-50">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          {item.africa ? (
                            <Check className="w-6 h-6 text-green-600" />
                          ) : (
                            <X className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{item.africaDetail}</div>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          {item.india ? (
                            <Check className="w-6 h-6 text-green-600" />
                          ) : (
                            <X className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{item.indiaDetail}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
