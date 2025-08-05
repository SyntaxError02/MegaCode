import { Button } from "@/components/ui/button"
import { Calendar, FileText } from "lucide-react"
import Link from "next/link"

export function WhyUsBottomLine() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-red-600 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          The Bottom
          <span className="text-red-200"> Line</span>
        </h2>
        <div className="text-xl md:text-2xl text-red-100 mb-12 space-y-4">
          <p>This isn't about offshoring. It's about outperforming.</p>
          <p>
            Our clients get local-level collaboration, global-quality output, and teams that stay. All at a cost that
            scales with them.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">Your Next Step</h3>
          <p className="text-xl text-red-100 mb-8">
            While others debate offshore options, you could already be shipping features.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <FileText className="mr-2 w-5 h-5" />
              Get Started
            </Button>
          </Link>

        </div>

        <div className="mt-12 text-red-200">
          <p>✓ No commitment required • ✓ See portfolios first • ✓ Start in 7 days</p>
        </div>
      </div>
    </section>
  )
}
