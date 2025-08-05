import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-black via-red-950 to-black text-white py-24 px-4">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10" />
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 text-sm mb-8">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          Trusted by 200+ startups globally
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Build Faster with Elite
          <span className="text-red-500"> Global Tech Talent</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Vetted developers, product managers, designers, and analysts — ready to ship product, drive velocity, and
          scale with you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-red-500">92%</div>
            <div className="text-gray-400">12+ Month Retention</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">60%</div>
            <div className="text-gray-400">Cost Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">85%</div>
            <div className="text-gray-400">Placed in 10 Days</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500">24/7</div>
            <div className="text-gray-400">Timezone Coverage</div>
          </div>
        </div>
      </div>
    </section>
  )
}
