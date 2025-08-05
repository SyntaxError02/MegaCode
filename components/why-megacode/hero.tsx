"use client"

import { motion } from "framer-motion"
import { ParticleSystem } from "@/components/ui/particle-system"
import { GradientOrb } from "@/components/ui/gradient-orb"

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  }

  return (
    <section
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
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" variants={itemVariants}>
          More Than Talent.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
            Your Strategic Growth Partner.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          We fuse elite global tech talent with end-to-end strategic guidance—from opportunity analysis and MVP
          development to scaling and securing your next funding round.
        </motion.p>
      </motion.div>
    </section>
  )
}
