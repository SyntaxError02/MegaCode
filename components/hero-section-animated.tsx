"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { MorphingText } from "@/components/ui/morphing-text"
import { ParticleSystem } from "@/components/ui/particle-system"
import { GradientOrb } from "@/components/ui/gradient-orb"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"

export function HeroSectionAnimated() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const morphingTexts = ["From Vision to Velocity", "Your Idea, Accelerated", "The Ultimate Growth Engine"]

  return (
    <section
      ref={ref}
      className="relative bg-black text-white overflow-hidden py-32 md:py-40"
      style={{ marginTop: "64px" }}
    >
      <ParticleSystem count={60} colors={["#a855f7", "#ec4899", "#ffffff", "#f59e0b"]} />
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
          <span className="text-white/90 font-medium">The new standard in strategic growth</span>
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
          <div className="py-2 overflow-visible">
            <MorphingText
              texts={morphingTexts}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-4xl md:text-6xl font-bold leading-relaxed"
              interval={3000}
            />
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          We fuse elite global talent with end-to-end strategic guidance to accelerate your journey from concept to
          market leadership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <MagneticButton
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white px-10 py-6 text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Get Started
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </MagneticButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                <AnimatedCounter end={3} duration={2000} />x
              </h3>
              <p className="text-sm text-gray-400 mt-1">Faster OKR Achievement</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
                $<AnimatedCounter end={50} duration={2500} />
                M+
              </h3>
              <p className="text-sm text-gray-400 mt-1">Value Created for Partners</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                <AnimatedCounter end={200} duration={3000} />+
              </h3>
              <p className="text-sm text-gray-400 mt-1">Professionals Deployed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-400">
                <AnimatedCounter end={50} duration={2200} />+
              </h3>
              <p className="text-sm text-gray-400 mt-1">Successful Exits & Scale-ups</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
