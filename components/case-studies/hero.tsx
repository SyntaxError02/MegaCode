"use client"

import { motion } from "framer-motion"
import { ParticleSystem } from "@/components/ui/particle-system"
import { GradientOrb } from "@/components/ui/gradient-orb"
import { useRef } from "react"

export function CaseStudiesHero() {
  const ref = useRef(null)

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden bg-black py-32 md:py-40"
      style={{ marginTop: "64px" }}
    >
      <ParticleSystem count={80} colors={["#a855f7", "#ec4899", "#ffffff", "#f59e0b"]} />
      
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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformative Outcomes,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
              Real Impact
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Every partnership tells a story of transformation. See how we've helped companies achieve extraordinary
          results through strategic talent solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">$50M+</div>
            <div className="text-gray-400 mt-1">Value Created</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">200+</div>
            <div className="text-gray-400 mt-1">Professionals Placed</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">100%</div>
            <div className="text-gray-400 mt-1">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
