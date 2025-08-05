"use client"
import { motion } from "framer-motion"
import { Lightbulb, AlertTriangle, Rocket } from "lucide-react"

const storyPoints = [
  {
    icon: AlertTriangle,
    title: "The Problem We Faced",
    description:
      "We saw brilliant companies everywhere—from startups to enterprises—struggle with the same growth-killers: hiring bottlenecks, misaligned teams, and a costly gap between great ideas and execution.",
  },
  {
    icon: Lightbulb,
    title: "The Insight We Uncovered",
    description:
      "We realized the most successful companies weren't just hiring skilled individuals; they were building integrated, product-minded teams. Teams that could challenge assumptions, operate autonomously, and connect every line of code to a business outcome. This insight became our blueprint.",
  },
  {
    icon: Rocket,
    title: "The Engine We Built",
    description:
      "We spent years architecting the infrastructure to cultivate and deploy these elite, integrated teams on demand. Today, MegaCode is the trusted partner for companies that need to move with strategic precision and unmatched speed.",
  },
]

export function OurStory() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            A Better Way to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Build</span>
          </h2>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <point.icon className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
