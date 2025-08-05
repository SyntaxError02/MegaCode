"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GetStarted() {
  return (
    <section className="py-24 bg-gradient-to-t from-black via-gray-900/50 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your Future,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Faster.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to trade bottlenecks for breakthroughs? Partner with MegaCode and transform your vision into reality
            with unmatched speed and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-bold text-lg px-8 py-6">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
