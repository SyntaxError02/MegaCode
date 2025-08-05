import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Building, Palette, Code } from "lucide-react"

const segments = [
  {
    icon: TrendingUp,
    title: "Growing Companies",
    description: "Rapid deployment, flexible scaling, startup-friendly pricing",
  },
  {
    icon: Building,
    title: "Established Organizations",
    description: "Enterprise compliance, dedicated management, innovation partnerships",
  },
  {
    icon: Palette,
    title: "Digital Agencies",
    description: "White-label augmentation, overflow capacity, specialized skills",
  },
  {
    icon: Code,
    title: "Tech Companies",
    description: "Product development, platform modernization, technical expertise",
  },
]

export function WhoWeServe() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Who We
            <span className="text-red-600"> Serve</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <segment.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{segment.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
