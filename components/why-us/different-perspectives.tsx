import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Wifi, CreditCard, Globe } from "lucide-react"

const innovations = [
  {
    icon: Smartphone,
    title: "Mobile-first architecture",
    description: "Built for the mobile-dominant world",
  },
  {
    icon: Wifi,
    title: "Bandwidth-optimized systems",
    description: "Efficient code that works everywhere",
  },
  {
    icon: CreditCard,
    title: "Payment innovation",
    description: "Emerging-market payment solutions",
  },
  {
    icon: Globe,
    title: "Offline-ready platforms",
    description: "Resilient systems for global use",
  },
]

export function DifferentPerspectives() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Different Perspectives,
            <span className="text-red-600"> Better Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            MegaCode talent brings innovation shaped by real-world constraints:
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            This isn't just smart code. It's scalable, resilient thinking — built for global use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {innovations.map((innovation, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <innovation.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{innovation.title}</h3>
                <p className="text-gray-600 text-sm">{innovation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
