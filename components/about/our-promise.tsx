import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe } from "lucide-react"

const promises = [
  {
    icon: Users,
    title: "To Clients",
    description:
      "Teams with unmatched drive, fresh perspectives, meaningful overlap, cultural alignment, and long-term stability",
  },
  {
    icon: Award,
    title: "To Talent",
    description:
      "Global opportunities to showcase your capabilities, competitive compensation, career growth, and the chance to change perceptions",
  },
  {
    icon: Globe,
    title: "To Both Continents",
    description:
      "Building bridges that unlock potential, create mutual value, and prove that hunger plus opportunity equals excellence",
  },
]

export function OurPromise() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-red-600">Promise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <promise.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{promise.title}</h3>
                <p className="text-gray-600 leading-relaxed">{promise.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
