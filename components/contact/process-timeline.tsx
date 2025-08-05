"use client"

import { motion } from "framer-motion"
import { Clock, Users, FileText } from "lucide-react"

const timelineSteps = [
  {
    icon: Clock,
    title: "Connect",
    duration: "Within 24 Hours",
    description: "A dedicated partner from our team will reach out to schedule a brief, no-obligation strategy call.",
  },
  {
    icon: Users,
    title: "Collaborate",
    duration: "The Strategy Call",
    description: "We'll dive into your goals, challenges, and vision to understand how we can best provide value.",
  },
  {
    icon: FileText,
    title: "Propose",
    duration: "48 Hours Later",
    description:
      "You'll receive a tailored proposal outlining a strategic team composition, timeline, and transparent pricing.",
  },
]

export function ProcessTimeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              Partnership
            </span>
          </h2>
          <p className="text-xl text-gray-400">A simple, transparent process designed for speed and clarity.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid md:grid-cols-3 gap-8"
        >
          {/* Dashed line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="8 8" />
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {timelineSteps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative text-center p-6">
              <div className="flex justify-center items-center mb-6">
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 border-2 border-red-500/50">
                  <step.icon className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-red-400 font-semibold mb-3">{step.duration}</p>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
