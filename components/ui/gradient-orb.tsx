"use client"

import { motion } from "framer-motion"

interface GradientOrbProps {
  size?: number
  color1?: string
  color2?: string
  className?: string
  opacity?: number
}

export function GradientOrb({
  size = 400,
  color1 = "#ef4444",
  color2 = "#3b82f6",
  className = "",
  opacity = 0.1,
}: GradientOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1}${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, "0")} 0%, ${color2}${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, "0")} 50%, transparent 100%)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}
