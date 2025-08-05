import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Clock, Users } from "lucide-react"

export function TimingAdvantage() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            The Timing
            <span className="text-red-600"> Is Now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Africa's talent pool is exploding — 60% of the population is under 25, with 23 million graduates annually.
            Early movers get the best rates, longest loyalty, and deepest integration. Wait too long, and you'll be
            joining the queue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-blue-200 bg-blue-50 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <div className="font-semibold text-black mb-2">Population Under 25</div>
              <p className="text-gray-600 text-sm">Young, hungry, and tech-native workforce</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">23M</div>
              <div className="font-semibold text-black mb-2">Annual Graduates</div>
              <p className="text-gray-600 text-sm">Fresh talent entering the market yearly</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 bg-red-50 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">Now</div>
              <div className="font-semibold text-black mb-2">Early Mover Advantage</div>
              <p className="text-gray-600 text-sm">Best rates and deepest talent relationships</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
