"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ParticleSystem } from "@/components/ui/particle-system"
import { GradientOrb } from "@/components/ui/gradient-orb"
import { MorphingText } from "@/components/ui/morphing-text"
import { Sparkles, Target, Trophy, Crown, Shield } from "lucide-react"
import { useRef } from "react"

export function WhyUsHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const whyUsTexts = [
    "The Strategic Advantage Smart Companies Are Quietly Leveraging",
    "The Competitive Edge You've Been Looking For",
    "The Secret Weapon of Successful Startups",
    "The Game-Changing Partnership You Need",
  ]

  return (
    <section
      ref={ref}
      className="relative h-screen bg-gradient-to-br from-black via-red-950 to-black text-white overflow-hidden flex items-center"
      style={{ marginTop: "64px" }}
    >
      {/* Particle System */}
      <ParticleSystem
        count={90}
        colors={["#ef4444", "#3b82f6", "#ffffff", "#8b5cf6", "#06b6d4", "#f59e0b", "#10b981"]}
      />

      {/* Gradient Orbs */}
      <GradientOrb
        size={700}
        color1="#ef4444"
        color2="#8b5cf6"
        className="top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        opacity={0.08}
      />
      <GradientOrb
        size={500}
        color1="#06b6d4"
        color2="#10b981"
        className="bottom-0 right-0 translate-x-1/2 translate-y-1/2"
        opacity={0.06}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 35,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Achievement Icons */}
      <motion.div
        className="absolute top-20 left-20 opacity-15"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Trophy className="w-16 h-16 text-yellow-400" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 opacity-15"
        animate={{
          y: [0, 25, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Target className="w-13 h-13 text-red-400" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 opacity-15"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Shield className="w-11 h-11 text-blue-400" />
      </motion.div>

      <motion.div
        className="absolute top-60 left-1/2 opacity-15"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 270, 540],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Crown className="w-15 h-15 text-purple-400" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 bg-red-600/10 border border-red-500/20 rounded-full px-6 py-3 text-sm mb-8 backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-red-500 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [1, 0.3, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <span className="text-white/90 font-medium">Strategic Competitive Advantage</span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-red-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          <motion.span
            className="block mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 40px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY }}
          >
            Why
          </motion.span>
          <motion.span
            className="text-red-500 inline-block"
            animate={{
              textShadow: [
                "0 0 20px rgba(239, 68, 68, 0.4)",
                "0 0 50px rgba(239, 68, 68, 0.7)",
                "0 0 20px rgba(239, 68, 68, 0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            Us
          </motion.span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl font-semibold mb-8 text-gray-200"
        >
          <MorphingText texts={whyUsTexts} className="text-gray-200" interval={2800} />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          The world is discovering what leading companies already know: exceptional tech talent exists beyond
          traditional outsourcing hubs. With English fluency, strong retention, and real-time collaboration, Africa is
          emerging as the strategic choice for those who prioritize performance over price.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
