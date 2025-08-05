import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Wifi, Building } from "lucide-react"

const infrastructure = [
  {
    icon: Zap,
    title: "99.9% Uptime",
    description: "Backup power systems ensure continuous operation",
  },
  {
    icon: Wifi,
    title: "Fiber Redundancy",
    description: "Multiple high-speed internet connections",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols and compliance",
  },
  {
    icon: Building,
    title: "Top Tech Hubs",
    description: "Google in Nairobi, Microsoft in Lagos, smart cities in Kigali",
  },
]

export function ProfessionalInfrastructure() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Professional Infrastructure,
            <span className="text-red-600"> No Excuses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our teams work from Africa's top tech hubs — with enterprise-grade infrastructure and global standards.
            We've got the setup — and the standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infrastructure.map((item, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-red-200 transition-colors text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
