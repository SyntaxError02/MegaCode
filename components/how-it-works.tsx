import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, Handshake, Rocket } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    day: "Day 1",
    title: "Strategy Call",
    description: "Tell us your tech stack, timeline, and goals",
    icon: Calendar,
  },
  {
    day: "Day 2-3",
    title: "Custom Team Proposal",
    description: "Hand-picked professionals matched to your needs",
    icon: Users,
  },
  {
    day: "Day 4-7",
    title: "Meet & Finalize",
    description: "Interview your team lead, review portfolios",
    icon: Handshake,
  },
  {
    day: "Week 2",
    title: "Full Speed",
    description: "Team integrated and shipping code",
    icon: Rocket,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            From Interview to Impact in
            <span className="text-red-600"> 7 Days</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">No recruiting fees. No HR hassle. No training time.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors relative">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-sm font-bold text-red-600 mb-2">{step.day}</div>
                <h3 className="text-lg font-bold text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
