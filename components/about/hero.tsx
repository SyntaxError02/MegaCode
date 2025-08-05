"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GradientOrb } from "@/components/ui/gradient-orb"
import { ParticleSystem } from "@/components/ui/particle-system"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[50vh] flex items-center justify-center text-center overflow-hidden bg-black py-32 md:py-40" style={{ marginTop: "64px" }}>
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

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We Built the Partner We Always Wished We Had.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Our story began with a simple, frustrating truth: traditional models for building technology are broken.
          They're slow, siloed, and disconnected from business strategy. We created MegaCode to be the solution—an
          integrated engine for vision, velocity, and value.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-bold text-lg px-8 py-6 shadow-lg rounded-full transition-transform transform hover:scale-105">
            <Link href="/contact">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
