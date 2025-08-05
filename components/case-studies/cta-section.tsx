import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"
import Link from "next/link"

export function CaseStudiesCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-red-600 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to Write Your
          <span className="text-red-200"> Success Story?</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Users className="mr-2 w-5 h-5" />
              Get Started
            </Button>
          </Link>

        </div>

        <div className="mt-12 text-red-200">
          <p>✓ Free consultation • ✓ Custom strategy • ✓ Proven results</p>
        </div>
      </div>
    </section>
  )
}
