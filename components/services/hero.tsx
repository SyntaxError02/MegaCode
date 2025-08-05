"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ParticleSystem } from "@/components/ui/particle-system"
import { GradientOrb } from "@/components/ui/gradient-orb"
import { Sparkles, BrainCircuit, Rocket } from 'lucide-react'
import { useRef } from "react"

export function ServicesHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative bg-black text-white overflow-hidden py-32 md:py-40"
      style={{ marginTop: "64px" }}
    >
      <ParticleSystem count={100} colors={["#a855f7", "#ec4899", "#ffffff", "#f59e0b"]} />

      <GradientOrb
        size={500}
        color1="#a855f7"
        color2="#3b82f6"
        className="top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        opacity={0.1}
      />
      <GradientOrb
        size={300}
        color1="#ec4899"
        color2="#f59e0b"
        className="bottom-0 right-0 translate-x-1/2 translate-y-1/2"
        opacity={0.08}
      />

      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="absolute top-20 left-20 opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <BrainCircuit className="w-12 h-12 text-purple-400" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -180, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Rocket className="w-12 h-12 text-pink-400" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-4 text-center z-10">
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
          <span className="text-white/90 font-medium">The Complete Growth Ecosystem</span>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
        >
          Your Strategic Execution Partner.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          We provide a complete ecosystem of services designed to transform your vision into reality. From strategic
          consulting to elite team deployment and full-cycle product development, we are the engine for your growth.
        </motion.p>
      </motion.div>
    </section>
  )
}
