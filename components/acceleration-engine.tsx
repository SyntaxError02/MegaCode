"use client"

import { motion } from "framer-motion"
import { Users, BrainCircuit, Globe, Zap } from "lucide-react"

const pillars = [
  {
    icon: Users,
    title: "Elite Talent",
    description:
      "The top 3% of global talent, rigorously vetted and ready to deploy. This is the foundation of your velocity.",
  },
  {
    icon: BrainCircuit,
    title: "Strategic Guidance",
    description:
      "Leverage our expertise in product strategy, market fit analysis, and GTM planning to make smarter decisions.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Tap into our network for key connections, strategic partnerships, and fundraising opportunities.",
  },
  {
    icon: Zap,
    title: "Unmatched Speed",
    description: "Launch faster and iterate quicker with teams that operate in your timezone, at your pace.",
  },
]

export function AccelerationEngine() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section
      className="py-24 bg-gray-900/50 text-white"
      style={{ backgroundImage: "radial-gradient(circle at top, rgba(168, 85, 247, 0.1), transparent 40%)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The MegaCode{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Acceleration Engine
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've built a comprehensive system to ensure your success at every stage.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="h-full text-center p-8 rounded-2xl bg-gray-900/60 border border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                  <pillar.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{pillar.title}</h3>
                <p className="flex-grow text-gray-400">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
