import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target, ArrowRight } from "lucide-react"

const capabilities = [
  {
    icon: Users,
    title: "Need talent?",
    description: "We've got it.",
    detail: "Plug in specialists or full teams seamlessly",
  },
  {
    icon: Lightbulb,
    title: "Need strategy?",
    description: "We bring it.",
    detail: "Product strategy and technical guidance",
  },
  {
    icon: Target,
    title: "Need both?",
    description: "That's our sweet spot.",
    detail: "Complete talent + strategy solutions",
  },
]

export function ScaleWithoutHeadache() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Scale Without
            <span className="text-red-600"> the Headache</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Your needs will evolve — and we're built for that. Whether you need to plug in a QA specialist, bring on a
            designer mid-project, or spin up a full cross-functional team, we handle it seamlessly. No disruption. No
            rework. Just momentum.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{capability.title}</h3>
                <div className="text-2xl font-bold text-red-600 mb-4">{capability.description}</div>
                <p className="text-gray-600 text-sm">{capability.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-6 py-4">
            <span className="text-lg font-semibold text-black">Seamless scaling</span>
            <ArrowRight className="w-5 h-5 text-red-600" />
            <span className="text-lg font-semibold text-black">No disruption</span>
            <ArrowRight className="w-5 h-5 text-red-600" />
            <span className="text-lg font-semibold text-black">Just momentum</span>
          </div>
        </div>
      </div>
    </section>
  )
}
