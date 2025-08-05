import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Star, Target } from "lucide-react"

export function TrueValue() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            True Value,
            <span className="text-red-600"> Not Just Lower Costs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Yes, we're more cost-effective. But what sets us apart is who we deliver: world-class developers and product
            leaders with startup grit, enterprise experience, and a hunger to own outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "We came for the savings but stayed for the quality. They outperform our local hires."
              </blockquote>
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg?height=60&width=60" alt="Marcus Weber" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-black">Marcus Weber</div>
                  <div className="text-gray-600">VP Engineering</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">Cost-Effective Excellence</h4>
                <p className="text-gray-600">Premium talent at sustainable rates</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">World-Class Quality</h4>
                <p className="text-gray-600">Developers and product leaders with proven track records</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">Outcome Ownership</h4>
                <p className="text-gray-600">Teams that care about your success, not just task completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
