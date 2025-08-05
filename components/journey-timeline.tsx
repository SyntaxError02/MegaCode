"use client"

import { motion } from "framer-motion"
import { Lightbulb, Wrench, Rocket, TrendingUp } from "lucide-react"

const journeySteps = [
  {
    icon: Lightbulb,
    title: "Ideation & Strategy",
    description: "We start by refining your idea, analyzing the market, and building a strategic roadmap for success.",
  },
  {
    icon: Wrench,
    title: "Product Development",
    description: "Our elite teams build your MVP or scale your existing product with unparalleled speed and quality.",
  },
  {
    icon: Rocket,
    title: "Go-to-Market",
    description: "We help you craft and execute a GTM strategy to achieve product-market fit and gain early traction.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Fundraising",
    description: "We provide ongoing support to scale your operations and connect you with fundraising opportunities.",
  },
]

export function JourneyTimeline() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = (isLeft: boolean) => ({
    hidden: { opacity: 0, x: isLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  })

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Journey from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Vision to Velocity
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A clear, structured path to turn your ambitious ideas into market-leading products.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-pink-500/0"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            aria-hidden="true"
          />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {journeySteps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  className={`flex items-center w-full ${isLeft ? "justify-start" : "justify-end"}`}
                  variants={itemVariants(isLeft)}
                >
                  <div className={`w-1/2 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <div
                      className={`relative p-6 rounded-2xl bg-gray-900/60 border border-purple-500/20 backdrop-blur-sm ${isLeft ? "text-right" : "text-left"}`}
                    >
                      <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? "-right-4" : "-left-4"}`}>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20">
                          <step.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
