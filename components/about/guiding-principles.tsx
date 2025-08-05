"use client"
import { motion } from "framer-motion"
import { Hand, Zap, Users, DollarSign } from "lucide-react"

const principles = [
  {
    icon: Hand,
    title: "Strategic Partnership over Outsourcing",
    description:
      "We don't just take tickets. We embed ourselves in your business, co-own your success, and provide the strategic guidance needed to navigate complex challenges.",
  },
  {
    icon: Zap,
    title: "Velocity Through Deep Integration",
    description:
      "Our teams operate as a seamless extension of yours, working in your timezone with frictionless communication to eliminate delays and accelerate your roadmap.",
  },
  {
    icon: Users,
    title: "Elite, Product-Minded Talent",
    description:
      "We provide access to the top 3% of global talent—individuals who think like founders and are driven by impact, not just tasks.",
  },
  {
    icon: DollarSign,
    title: "Capital-Efficient Growth",
    description:
      "Our model allows you to scale your team and capabilities with maximum efficiency, preserving your capital for other critical growth initiatives.",
  },
]

export function GuidingPrinciples() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Guiding{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              Principles
            </span>
          </h2>
        </motion.div>
        <motion.ul
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {principles.map((principle, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-6 p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <principle.icon className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-400">{principle.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
