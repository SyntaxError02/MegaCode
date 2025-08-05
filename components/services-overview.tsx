"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Users, Rocket, Code } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  { icon: BrainCircuit, name: "Strategic Advisory" },
  { icon: Users, name: "Team Integration" },
  { icon: Rocket, name: "Full-Cycle Development" },
  { icon: Code, name: "Managed Teams & Pods" },
]

export function ServicesOverview() {
  return (
    <section
      className="py-24 bg-gray-900/50 text-white"
      style={{ backgroundImage: "radial-gradient(circle at bottom, rgba(236, 72, 153, 0.1), transparent 40%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Your Complete{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            Growth Ecosystem
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          A comprehensive suite of services designed to provide strategic leverage at every stage of your journey.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="p-4 rounded-full bg-gradient-to-br from-pink-600/20 to-orange-600/20 border border-pink-500/20">
                <service.icon className="w-8 h-8 text-pink-400" />
              </div>
              <span className="font-semibold text-gray-300">{service.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/services">
            <MagneticButton
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 text-lg bg-transparent backdrop-blur-sm transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </span>
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
