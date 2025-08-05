"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, TrendingUp, Target } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    id: "primitive-haus",
    title: "Primitive Haus",
    subtitle: "From Concept to Premium Exit",
    description:
      "Transforming a startup idea into a premium lifestyle brand with strategic talent deployment and rapid market entry.",
    metrics: [
      { label: "Time to Market", value: "6 Months", icon: Clock },
      { label: "Team Size", value: "8 Specialists", icon: Users },
      { label: "Exit Timeline", value: "24 Months", icon: TrendingUp },
      { label: "Market Position", value: "Premium Segment", icon: Target },
    ],
    tags: ["E-commerce", "Brand Development", "Full-Stack"],
    gradient: "from-purple-500 to-pink-500",
    testimonial: {
      quote:
        "MegaCode didn't just provide developers - they became strategic partners in our journey. Their team understood our vision and helped us execute it flawlessly. The quality of talent and speed of delivery exceeded all expectations.",
      author: "Sarah Chen",
      role: "Founder & CEO, Primitive Haus",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: "ultiblob",
    title: "UltiBlob",
    subtitle: "Emergency Talent Deployment in 72 Hours",
    description:
      "Delivering critical development resources under extreme time pressure to save a major product launch.",
    metrics: [
      { label: "Response Time", value: "72 Hours", icon: Clock },
      { label: "Developers Deployed", value: "4 Senior Devs", icon: Users },
      { label: "Launch Success", value: "On Schedule", icon: Target },
      { label: "Client Retention", value: "Ongoing", icon: TrendingUp },
    ],
    tags: ["Emergency Deployment", "Backend", "DevOps"],
    gradient: "from-pink-500 to-orange-500",
    testimonial: {
      quote:
        "When our original development team fell through 72 hours before a critical launch, MegaCode saved our entire project. They deployed 4 senior developers who seamlessly integrated with our existing codebase and delivered exactly what we needed, when we needed it.",
      author: "Marcus Rodriguez",
      role: "CTO, UltiBlob",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  },
  {
    id: "doormot",
    title: "Doormot",
    subtitle: "From Zero to Hero: PropTech Transformation",
    description:
      "How MegaCode helped a Nigerian proptech startup go from zero customers and no product-market fit to 500+ users, multiple enterprise clients, and a pre-seed round that exceeded targets by 200%.",
    metrics: [
      { label: "Active Users", value: "500+", icon: Users },
      { label: "Enterprise Clients", value: "5+", icon: Target },
      { label: "Funding Raised", value: "+200% Target", icon: TrendingUp },
      { label: "Time to PMF", value: "60 Days", icon: Clock },
    ],
    tags: ["PropTech", "Market Strategy", "Startup Growth"],
    gradient: "from-orange-500 to-yellow-500",
    testimonial: {
      quote:
        "MegaCode didn't just save our company—they gave us a roadmap to become the proptech leader we always envisioned. They're not service providers; they're strategic partners who made our impossible dream inevitable.",
      author: "Doormot CEO",
      role: "CEO, Doormot",
      avatar: "/placeholder-user.jpg",
    },
  },
]

export function CaseStudiesOverviewRedesign() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
              Define Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations, measurable impact, and partnerships that drive extraordinary results.
          </p>
        </motion.div>

        <div className="space-y-20">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className={`p-1 rounded-2xl bg-gradient-to-br ${study.gradient}`}>
                <Card className="overflow-hidden rounded-xl border-0">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Content Side */}
                      <div className="lg:col-span-3 p-8 lg:p-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 font-medium">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                        <h4
                          className={`text-lg font-semibold mb-4 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                        >
                          {study.subtitle}
                        </h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                        <Link
                          href={`/case-studies/${study.id}`}
                          className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group"
                        >
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                      {/* Metrics Side */}
                      <div className="lg:col-span-2 bg-gray-50/70 p-8 lg:p-10 border-l border-gray-200/60">
                        <h5 className="text-base font-semibold mb-6 text-gray-700">Key Results</h5>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                          {study.metrics.map((metric) => (
                            <div key={metric.label}>
                              <metric.icon
                                className={`w-7 h-7 mb-2 bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                              />
                              <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                              <div className="text-sm text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Integrated Testimonial */}
                    <div className="border-t border-gray-200/60 bg-white p-8 lg:p-10">
                      <div className="flex items-start gap-4">
                        <img
                          src={study.testimonial.avatar || "/placeholder.svg"}
                          alt={study.testimonial.author}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0 mt-1"
                        />
                        <div className="flex-1">
                          <blockquote className="text-gray-700 italic leading-relaxed">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <footer className="mt-3">
                            <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                            <div className="text-gray-600 text-sm">{study.testimonial.role}</div>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
