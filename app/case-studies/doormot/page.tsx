import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, TrendingUp, Users, Target, CheckCircle, Zap, Award } from "lucide-react"
import Link from "next/link"

export default function DoormotPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-black via-orange-900 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-orange-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="text-sm text-orange-400 mb-4">Doormot • PropTech • 8 Months</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            From Zero to <span className="text-orange-500">Hero</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">How MegaCode Transformed Doormot's PropTech Journey</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">5+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">+200%</div>
              <div className="text-gray-400">Funding Target</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">60 Days</div>
              <div className="text-gray-400">Time to PMF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* The Breaking Point */}
          <Card className="border-2 border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-8 h-8 text-orange-600" />
                The Breaking Point
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                In December 2023, Doormot launched with big dreams to revolutionize Nigeria's property technology sector. Eight months later, reality hit hard: zero customers, no product-market fit, and depleting resources.
              </p>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-bold text-black mb-3">"We had built what we thought the market needed," recalls Doormot's CEO. "But we were talking to ourselves. The market wasn't listening, and we were running out of time."</h4>
                <p className="text-gray-700">This is where MegaCode entered the picture.</p>
              </div>
            </CardContent>
          </Card>

          {/* The MegaCode Solution */}
          <Card className="border-2 border-green-100 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-8 h-8 text-green-600" />
                The MegaCode Solution: Strategic Surgery, Not Just Staffing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-black mb-3">Phase 1: Deep Diagnosis (Month 1)</h4>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Market Research: Analyzed Nigeria's proptech ecosystem and successful players like SmallSmall and Spleet</li>
                  <li>• Business Model Audit: Dissected their entire value proposition</li>
                  <li>• Customer Analysis: Mapped every potential customer interaction</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-black mb-2">The Discovery:</h5>
                  <p className="text-sm text-gray-700">
                    Doormot was solving a problem that didn't exist in their target segment.
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-black mb-3">Phase 2: Strategic Rebuild (Month 2)</h4>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• New Value Proposition: Shifted from generic property management to solving Nigeria's transparency crisis</li>
                  <li>• Target Market Pivot: Moved from individual renters to B2B2C model targeting developers</li>
                  <li>• Revenue Model: Created multiple streams with clear unit economics</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-black mb-2">The Transformation:</h5>
                  <p className="text-sm text-gray-700">
                    Before MegaCode: "We're a proptech company that makes property management easier"<br />
                    After MegaCode: "We're the trust infrastructure for Nigeria's $30B property market, eliminating fraud and enabling transparent transactions"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Results */}
          <Card className="border-2 border-blue-100 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-8 h-8 text-blue-600" />
                The Results: Immediate and Dramatic
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-3">Rapid Success (Months 3-5)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 5 enterprise clients signed, including major Lagos property developers</li>
                    <li>• First revenue generated since inception</li>
                    <li>• Product-market fit achieved with clear validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-3">Scaling and Funding (Months 6-8)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Global Network: Connected them with investors in Dubai, Saudi Arabia, and the US</li>
                    <li>• Strategic Pitch: Crafted compelling narrative for international investors</li>
                    <li>• Talent Deployment: Provided customer-empathetic engineers and PMs who understood Nigerian market dynamics</li>
                    <li>• Funding Result: Pre-seed round exceeded target by 200%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Today: A PropTech Success Story */}
          <Card className="border-2 border-orange-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-8 h-8 text-orange-600" />
                Today: A PropTech Success Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 500+ active users on the platform</li>
                <li>• Multiple enterprise clients with recurring revenue</li>
                <li>• Strong product-market fit with expanding market presence</li>
                <li>• International backing with continued growth funding</li>
              </ul>
            </CardContent>
          </Card>

          {/* The Ongoing Partnership */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="w-8 h-8 text-green-600" />
                The Ongoing Partnership
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Doormot retains MegaCode as technical and business advisors, positioning for continental expansion across Africa and beyond.
              </p>
              <blockquote className="italic text-gray-800 border-l-4 border-orange-400 pl-4">
                "MegaCode didn't just save our company—they gave us a roadmap to become the proptech leader we always envisioned. They're not service providers; they're strategic partners who made our impossible dream inevitable."<br />
                                            <span className="font-semibold text-black">- Eldred Green</span>
              </blockquote>
            </CardContent>
          </Card>

          {/* The MegaCode Difference */}
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-black">The MegaCode Difference</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Strategic Partnership over traditional consulting</li>
                <li>• Global Network Access that opened international doors</li>
                <li>• Cultural Intelligence understanding both Nigerian dynamics and global standards</li>
                <li>• End-to-End Execution from strategy through funding to scaling</li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-orange-600 bg-gradient-to-r from-orange-600 to-black text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-orange-100 mb-6">
                Doormot's journey from zero to 500+ users isn't unique—it's the MegaCode methodology in action.<br />
                Your vision. Our velocity. Unstoppable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    Get Started
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
} 