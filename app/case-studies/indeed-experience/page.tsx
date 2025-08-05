import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IndeedExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-black via-blue-950 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-blue-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="text-sm text-blue-400 mb-4">Personal Story • Career Foundation • My Journey</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Indeed <span className="text-blue-500">Experience</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">My Personal Journey Into This Business</p>
          <p className="text-lg text-blue-100 leading-relaxed">
            This is the story of how my experience at Indeed shaped everything I know about scaling teams, building
            products, and why I started MegaCode.
          </p>
        </div>
      </section>

      {/* Content - Keep the original story exactly as provided */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Note: This is where your original Indeed story content would go */}
          {/* I'm keeping this placeholder since you want the original story preserved */}
          <Card className="border-2 border-blue-100 bg-blue-50">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-black mb-4">Original Indeed Story</h3>
                <p className="text-gray-700 leading-relaxed">
                  [Your original Indeed case study content should be inserted here exactly as you wrote it - I don't
                  want to change your personal story without your specific content]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How This Led to MegaCode */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-black">How This Experience Led to MegaCode</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The lessons learned at Indeed directly inform every engagement at MegaCode. We don't just provide
                talent—we provide the strategic thinking and proven practices that come from real hypergrowth
                experience.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    For Our Clients
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Proven scaling strategies from real hypergrowth experience</li>
                    <li>• Technical architecture guidance for long-term success</li>
                    <li>• Team building practices that maintain culture at scale</li>
                    <li>• IPO-ready engineering practices from day one</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    For Our Talent
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Mentorship from someone who's been through hypergrowth</li>
                    <li>• Exposure to world-class engineering practices</li>
                    <li>• Career development based on proven success patterns</li>
                    <li>• Opportunities to work on IPO-caliber projects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-blue-600 bg-gradient-to-r from-blue-600 to-black text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Scale Like Indeed?</h3>
              <p className="text-blue-100 mb-6">
                Whether you're preparing for hypergrowth or navigating it now, we bring proven experience from one of
                tech's greatest success stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Get Strategic Guidance
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
