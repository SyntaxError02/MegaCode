import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, CheckCircle } from "lucide-react"

export function RealTimeCollaboration() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Work in Real-Time,
            <span className="text-red-600"> Not Overnight</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike far-shore teams that operate 10+ hours ahead, MegaCode professionals align with your business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-black">What this means for you:</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Everyone attends standups</h4>
                  <p className="text-gray-600">No more async updates or missed context. Your entire team is present.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Code reviews happen same-day</h4>
                  <p className="text-gray-600">
                    Feedback loops close in hours, not days. Ship faster, iterate quicker.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black mb-2">Issues are solved now — not tomorrow</h4>
                  <p className="text-gray-600">Critical bugs get immediate attention during your business hours.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "We used to wait 24 hours for fixes. Now, we ship 3x faster."
              </blockquote>
              <div className="flex items-center gap-4">
                <img src="/placeholder.svg?height=60&width=60" alt="Sarah Chen" className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-black">Sarah Chen</div>
                  <div className="text-gray-600">CTO</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
