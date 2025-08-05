"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { GradientOrb } from "@/components/ui/gradient-orb"

export function ServicesCTA() {
  return (
    <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
      <GradientOrb
        size={800}
        color1="#8b5cf6"
        color2="#ec4899"
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        opacity={0.15}
      />

      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <Sparkles className="w-12 h-12 text-purple-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Ready to Accelerate Your Roadmap?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Let's discuss how our integrated services can provide the strategic leverage you need to win in a competitive
          market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <Link href="/case-studies">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent rounded-full backdrop-blur-sm"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
