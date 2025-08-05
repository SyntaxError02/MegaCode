import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, DollarSign, Target, CheckCircle, Zap, Users, Award } from "lucide-react"
import Link from "next/link"

export default function UltiBlobPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-br from-black via-red-950 to-black text-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-red-300 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <div className="text-sm text-red-400 mb-4">UltiBlob • Cloud Infrastructure • 72 Hours</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            10x Engineer in <span className="text-red-500">72 Hours</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">How We Delivered Emergency Azure Expertise at 30% of Local Cost</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">72hrs</div>
              <div className="text-gray-400">Time to Hire</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">70%</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">$2.5M</div>
              <div className="text-gray-400">Contracts Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">2+</div>
              <div className="text-gray-400">Years Retained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* The Urgent Challenge */}
          <Card className="border-2 border-red-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="w-8 h-8 text-red-600" />
                The Urgent Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                UltiBlob's CEO faced a perfect storm: several large enterprise contracts landed simultaneously, each
                requiring specialized Azure and Hyper-V expertise. The local talent market quoted $150,000+ salaries
                with 3-month hiring timelines. He needed someone yesterday.
              </p>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-black mb-3">The Stakes:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• $2.5M in contracts at risk</li>
                  <li>• Enterprise clients expecting immediate delivery</li>
                  <li>• Specific need: Azure migration expert with Hyper-V deep expertise</li>
                  <li>• Timeline: Days, not months</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Our Full-Service Solution */}
          <Card className="border-2 border-green-100 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-8 h-8 text-green-600" />
                Our Full-Service Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-bold text-black mb-3">Day 1: Strategic Talent Mapping</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We didn't just post a job. We engineered a talent strategy:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Analyzed the technical requirements across all contracts</li>
                  <li>• Mapped skill combinations rarely found together (Azure + Hyper-V + On-premise)</li>
                  <li>• Defined compensation framework balancing quality and budget</li>
                  <li>• Created compelling opportunity positioning</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-black mb-2">The Job Description We Crafted:</h5>
                  <p className="text-sm text-gray-700">
                    Not a boring requirements list, but a story about transformation—turning legacy infrastructure into
                    modern cloud architecture. We positioned it as a career-defining opportunity to lead enterprise
                    transformations.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-3">Day 2-3: Precision Talent Hunt</h4>
                <p className="text-gray-700 leading-relaxed mb-4">Our recruitment machine kicked into high gear:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-black mb-2">The Numbers:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sourced: 2,000+ profiles across our network</li>
                      <li>• Screened: 150 candidates meeting base criteria</li>
                      <li>• Technical Assessments: 40 deep-dive evaluations</li>
                      <li>• Culture Interviews: 12 finalist conversations</li>
                      <li>• Background Verified: 3 top candidates</li>
                      <li>• Client Interviews: 1 perfect match</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">What Set Our Process Apart:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Live coding sessions on actual Azure scenarios</li>
                      <li>• Hyper-V troubleshooting simulations</li>
                      <li>• Communication assessment with mock client presentations</li>
                      <li>• Reference checks with previous enterprise clients</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Beyond Recruitment */}
          <Card className="border-2 border-blue-100 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-8 h-8 text-blue-600" />
                Beyond Recruitment: The Complete Package
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-3">Legal & Compliance Handled</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Drafted tri-party agreements (Client ↔ MegaCode ↔ Talent)</li>
                    <li>• Managed international compliance requirements</li>
                    <li>• Set up IP protection and NDAs</li>
                    <li>• Structured payments for tax optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-3">Zero-Friction Onboarding</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Shipped pre-configured laptop with VPN access</li>
                    <li>• Arranged backup power solution for 99.9% uptime</li>
                    <li>• Set up enterprise communication tools</li>
                    <li>• Created 30-60-90 day success plan</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-black mb-2">The Details Nobody Wants to Handle (But We Did):</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <ul className="space-y-1">
                    <li>• Equipment insurance and tracking</li>
                    <li>• Time zone overlap optimization</li>
                    <li>• Holiday calendar alignment</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Emergency contact protocols</li>
                    <li>• Performance review frameworks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Result */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="w-8 h-8 text-green-600" />
                The Result: A 10x Engineer Delivered
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-black mb-3">Meet Samuel: Our Placed Cloud Infrastructure Engineer</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Previously architected Azure migrations for 3 Fortune 500s</li>
                    <li>• Certified in both Azure (AZ-304) and Hyper-V (MCSE)</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Available immediately at $35/hour vs. $150k+ local salary</li>
                    <li>• 6 hours daily overlap with client's US team</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-black mb-3">Impact in First 90 Days:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Migrated 200+ VMs from on-premise to Azure</li>
                    <li>• Reduced infrastructure costs by 40%</li>
                    <li>• Achieved 99.99% uptime across all systems</li>
                  </ul>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Trained client's internal team on Azure best practices</li>
                    <li>• Architected disaster recovery saving $500k annually</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Numbers */}
          <Card className="border-2 border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl text-black">The Numbers That Matter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Speed
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 72 hours from request to placement</li>
                    <li>• 5 days to full productivity</li>
                    <li>• 0 days of client time spent on recruitment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    Value
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 70% cost savings vs. local hire</li>
                    <li>• 10x performance based on client metrics</li>
                    <li>• 100% contract delivery on schedule</li>
                    <li>• $2.5M contracts successfully retained</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-600" />
                    Long-term
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 2+ years and counting (still with client)</li>
                    <li>• 3 additional hires based on success</li>
                    <li>• 5-star NPS from client</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-4xl text-blue-600 mb-4">"</div>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  I needed a miracle—someone with rare skills, available immediately, at a price that made sense.
                  MegaCode delivered exactly that in 72 hours. But what impressed me most was everything else they
                  handled. I never worried about contracts, equipment, or onboarding. Samuel started delivering value on
                  day one and hasn't stopped. We've since hired three more engineers through MegaCode.
                </p>
                <div className="mt-6">
                  <div className="font-bold text-black">CEO</div>
                  <div className="text-gray-600">UltiBlob</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why This Worked */}
          <Card className="border-2 border-green-100">
            <CardHeader>
              <CardTitle className="text-2xl text-black">Why This Worked</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    We Own the Entire Process
                  </h4>
                  <p className="text-sm text-gray-600">
                    From job description to daily standups, we handle everything. The client focuses on their business,
                    not HR complexities.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Deep Technical Vetting
                  </h4>
                  <p className="text-sm text-gray-600">
                    We don't just check resumes. Our technical assessments would challenge any FAANG interview process.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Infrastructure for Success
                  </h4>
                  <p className="text-sm text-gray-600">
                    Equipment, compliance, onboarding—we've built the infrastructure so talent can focus on delivering
                    value from day one.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Relationship, Not Transaction
                  </h4>
                  <p className="text-sm text-gray-600">
                    Two years later, Samuel is still delivering exceptional value. That's the difference between
                    staffing and partnership.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Demonstrated */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-black">Services Demonstrated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">This case showcases our complete talent ecosystem:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Talent Strategy Consulting</strong> - Defining the perfect candidate profile
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Elite Recruitment</strong> - Finding needles in haystacks
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Technical Validation</strong> - Ensuring real expertise, not resume keywords
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Legal & Compliance</strong> - International contracts done right
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Infrastructure Setup</strong> - Equipment, tools, and systems
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Onboarding Excellence</strong> - Zero to productive in days
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>
                      <strong>Ongoing Partnership</strong> - Success management beyond placement
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="border-2 border-red-600 bg-gradient-to-r from-red-600 to-black text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Solve Your Talent Emergency?</h3>
              <p className="text-red-100 mb-6">
                Whether you need specialized expertise in 72 hours or want to build a complete team, we deliver results
                that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Get Emergency Talent
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
