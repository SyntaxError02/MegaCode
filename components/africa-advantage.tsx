{
  ;("use client")
}
import Image from "next/image"
import { Globe, TrendingUp, Users, Zap } from "lucide-react"

export function AfricaAdvantage() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Backed by Africa's
            <span className="text-red-600"> Growing Talent Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our talent is sourced primarily from emerging markets — especially Africa — known for English fluency,
            loyalty, and rising global impact. We believe the future of innovation is borderless.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Massive Talent Pool</h3>
                <p className="text-gray-600">
                  60% of Africa's population is under 25, with 420 million English speakers and 700,000+ professional
                  developers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Global Success Stories</h3>
                <p className="text-gray-600">
                  Andela ($1.5B valuation), Paystack (acquired by Stripe), Flutterwave ($3B valuation) — Africa is
                  producing world-class tech companies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Rising Innovation Hub</h3>
                <p className="text-gray-600">
                  Mobile-first innovation, fintech leadership (M-Pesa), and entrepreneurial mindset make African talent
                  uniquely valuable.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Cultural Alignment</h3>
                <p className="text-gray-600">
                  British colonial education system, Western business practices, and direct communication style ensure
                  seamless integration.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-full w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/african-tech-hub.jpg" alt="Vibrant African tech hub" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
