"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Code } from "lucide-react"

export function BeyondCode() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-red-950/20 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Don't Just Write Code.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
                We Drive Business Outcomes.
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our teams are more than developers; they are product-minded partners who challenge assumptions, identify
              market opportunities, and align every line of code with your strategic goals. We act as co-pilots on your
              growth journey.
            </p>
          </motion.div>
          <motion.div
            className="relative flex justify-center items-center h-80"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="absolute w-full h-full bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-8 z-10">
              <div className="p-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
              <motion.div
                className="h-1 w-24 bg-gradient-to-r from-red-400 to-red-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                <BrainCircuit className="w-16 h-16 text-red-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
