import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, CheckCircle, Zap, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PrimitiveHausPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-black via-red-950 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-red-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="text-sm text-red-400 mb-4">Primitive Haus • Luxury Watch Brand • 24 Months</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vision to <span className="text-red-500">Exit</span> in 24 Months
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            How We Built a Complete Company from Solo Founder to 8-Figure Acquisition
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">24mo</div>
              <div className="text-gray-400">Time to Exit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">$2.4M</div>
              <div className="text-gray-400">ARR at Exit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">200</div>
              <div className="text-gray-400">Pre-Launch Sales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">8-Fig</div>
              <div className="text-gray-400">Acquisition Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* The Challenge */}
          <Card className="border-2 border-red-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-8 h-8 text-red-600" />
                The Challenge: Solo Founder, Big Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                A talented technical founder had a vision for a luxury watch brand that would disrupt the traditional
                market. But vision alone wasn't enough—he needed a co-founder, a team, a go-to-market strategy, and the
                business expertise to navigate the complex luxury goods landscape.
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-black mb-3">What He Had:</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Exceptional technical skills and product vision</li>
                  <li>• Deep understanding of watch mechanics and design</li>
                  <li>• Passion for creating something extraordinary</li>
                </ul>
                <h4 className="font-bold text-black mb-3">What He Needed:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Business co-founder with complementary skills</li>
                  <li>• Complete team across marketing, operations, and sales</li>
                  <li>• Go-to-market strategy for luxury segment</li>
                  <li>• Strategic guidance from idea to exit</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Our Comprehensive Solution */}
          <Card className="border-2 border-green-100 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-8 h-8 text-green-600" />
                Our Comprehensive Solution: Building a Company
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-black mb-3">Phase 1: Finding the Perfect Co-Founder (Months 1-3)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We didn't just find any business partner—we found THE business partner:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Mapped the luxury goods ecosystem to identify ideal profiles</li>
                  <li>• Sourced candidates with luxury brand experience and startup agility</li>
                  <li>• Facilitated chemistry meetings and partnership negotiations</li>
                  <li>• Structured equity agreements and partnership terms</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-black mb-2">The Perfect Match:</h5>
                  <p className="text-sm text-gray-700">
                    Former luxury brand executive with 10+ years at Rolex and Cartier, plus startup experience. The
                    chemistry was immediate, and the skill sets were perfectly complementary.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-3">Phase 2: Team Assembly (Months 4-8)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With the co-founder in place, we built the complete team:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Core Team Roles Filled:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Head of Marketing (luxury goods specialist)</li>
                      <li>• Operations Director (supply chain expert)</li>
                      <li>• Sales Manager (high-end retail experience)</li>
                      <li>• Customer Experience Lead</li>
                      <li>• Financial Controller</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Our Unique Approach:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Each hire was vetted for luxury market understanding</li>
                      <li>• Cultural fit assessments for startup environment</li>
                      <li>• Equity participation to ensure long-term commitment</li>
                      <li>• Ongoing performance coaching and development</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-3">Phase 3: Go-to-Market Strategy (Months 9-15)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">We didn't just build a team—we built a strategy:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Developed premium positioning and brand narrative</li>
                  <li>• Created pre-launch buzz through exclusive previews</li>
                  <li>• Built community-driven marketing approach</li>
                  <li>• Established partnerships with luxury retailers</li>
                  <li>• Implemented direct-to-consumer sales strategy</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* The Breakthrough Results */}
          <Card className="border-2 border-blue-100 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-8 h-8 text-blue-600" />
                The Breakthrough Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-3">Pre-Launch Success</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 200 units pre-sold before official launch</li>
                    <li>• $480,000 in pre-orders (average $2,400 per watch)</li>
                    <li>• 15,000+ email subscribers</li>
                    <li>• Featured in 3 major luxury publications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-3">Market Penetration</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Premium segment entry achieved</li>
                    <li>• Exclusive retail partnerships secured</li>
                    <li>• Celebrity endorsements obtained</li>
                    <li>• International distribution established</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">The Secret Sauce:</h5>
                <p className="text-sm text-gray-600">
                  While competitors focused on traditional advertising, we built a movement. The community-driven
                  approach created authentic demand and turned customers into brand ambassadors. This wasn't just about
                  selling watches— it was about creating a lifestyle brand that people wanted to be part of.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Exit Strategy */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="w-8 h-8 text-green-600" />
                The Strategic Exit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-black mb-3">Months 16-24: Preparing for Exit</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With strong fundamentals in place, we began positioning for acquisition:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Streamlined operations for scalability</li>
                    <li>• Documented all processes and systems</li>
                    <li>• Built recurring revenue streams</li>
                    <li>• Established clear growth trajectory</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Identified strategic acquirers</li>
                    <li>• Prepared comprehensive data room</li>
                    <li>• Negotiated from position of strength</li>
                    <li>• Achieved 8-figure acquisition</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-black mb-3">Final Numbers at Exit:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$2.4M</div>
                    <div className="text-sm text-gray-600">Annual Recurring Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">8-Figure</div>
                    <div className="text-sm text-gray-600">Acquisition Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">24mo</div>
                    <div className="text-sm text-gray-600">Idea to Exit</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why This Worked */}
          <Card className="border-2 border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl text-black">Why This Transformation Worked</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Complete Ecosystem Approach
                  </h4>
                  <p className="text-sm text-gray-600">
                    We didn't just provide talent—we built an entire company ecosystem from co-founder to exit strategy.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Luxury Market Expertise
                  </h4>
                  <p className="text-sm text-gray-600">
                    Our network includes specialists who understand the unique dynamics of luxury goods and premium
                    positioning.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Strategic Partnership
                  </h4>
                  <p className="text-sm text-gray-600">
                    We became true partners, invested in the outcome and providing guidance at every critical decision
                    point.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Exit-Focused from Day One
                  </h4>
                  <p className="text-sm text-gray-600">
                    Every decision was made with the eventual exit in mind, ensuring maximum value creation and clean
                    handoff.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Demonstrated */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-black">Complete Service Portfolio Demonstrated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">This transformation showcased our full range of capabilities:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Co-founder Matching</strong> - Finding the perfect business partner
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Complete Team Assembly</strong> - Building entire departments
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Strategic Consulting</strong> - Go-to-market and positioning
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Market Entry Strategy</strong> - Luxury segment penetration
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Brand Development</strong> - Premium positioning and narrative
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Operations Scaling</strong> - Systems and process optimization
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Exit Preparation</strong> - Strategic positioning for acquisition
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Partnership Guidance</strong> - From vision to successful exit
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  MegaCode didn't just give us contractors—they gave us a company. From finding my co-founder to
                  building our entire team to guiding our exit, they were true partners. The team's dedication made the
                  difference between another watch brand and a movement that got acquired. I couldn't have imagined this
                  journey without them.
                </p>
                <div className="mt-6">
                  <div className="font-bold text-black">Founder</div>
                  <div className="text-gray-600">Primitive Haus</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-red-600 bg-gradient-to-r from-red-600 to-black text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Success Story?</h3>
              <p className="text-red-100 mb-6">
                Whether you need a co-founder, a complete team, or strategic guidance from vision to exit, we're here to
                make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Start Your Transformation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                >
                  Schedule Strategy Session
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
