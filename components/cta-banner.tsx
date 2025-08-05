"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function CTABanner() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-black"
        style={{ backgroundImage: "radial-gradient(circle at 50% 0, rgba(168, 85, 247, 0.15), transparent 50%)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Ready to Accelerate Your Vision?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Let's discuss how our integrated approach can provide the strategic leverage you need to win.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact">
            <MagneticButton
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-10 py-6 text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </span>
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
