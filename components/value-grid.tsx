import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, MessageCircle, Clock } from "lucide-react"

const values = [
  {
    icon: DollarSign,
    title: "Cost Savings Up to 60%",
    description: "Get premium talent at a fraction of Silicon Valley costs without compromising on quality.",
  },
  {
    icon: Users,
    title: "Developers That Stay 4+ Years",
    description: "Our talent has exceptional retention rates, reducing your hiring and onboarding costs.",
  },
  {
    icon: MessageCircle,
    title: "English Fluency & Clear Communication",
    description: "Native and fluent English speakers with excellent communication skills and cultural fit.",
  },
  {
    icon: Clock,
    title: "Same-Day Collaboration",
    description: "Perfect timezone overlap with EU/US teams for real-time collaboration and faster delivery.",
  },
]

export function ValueGrid() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Global Startups Choose
            <span className="text-red-600"> MegaCode</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've solved the challenges of remote hiring by connecting you with Africa's top 1% of tech talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors">
                  <value.icon className="w-8 h-8 text-red-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
