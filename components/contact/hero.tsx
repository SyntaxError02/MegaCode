"use client"

import { motion } from "framer-motion"
import { ParticleSystem } from "@/components/ui/particle-system"
import { GradientOrb } from "@/components/ui/gradient-orb"
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <ParticleSystem count={40} colors={["#a855f7", "#ec4899", "#ffffff", "#f59e0b"]} />
      <GradientOrb
        size={400}
        color1="#a855f7"
        color2="#3b82f6"
        className="top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        opacity={0.1}
      />
      <GradientOrb
        size={250}
        color1="#ec4899"
        color2="#f59e0b"
        className="bottom-0 right-0 translate-x-1/2 translate-y-1/2"
        opacity={0.08}
      />

      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 bg-purple-600/10 border border-purple-500/20 rounded-full px-6 py-3 text-sm mb-6 backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-purple-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <span className="text-white/90 font-medium">Let's Connect</span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
            Your Vision, Our Velocity.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          The path to building a world-class team and shipping faster starts here. Whether you have a defined need or
          are exploring strategic options, we're ready to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex items-center justify-center gap-2 text-gray-400"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Scroll down to start the conversation</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowRight className="w-4 h-4 rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
