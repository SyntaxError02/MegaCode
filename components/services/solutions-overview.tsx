"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Users, Rocket, Code } from "lucide-react"

const solutions = [
  {
    icon: BrainCircuit,
    title: "Strategic Advisory",
    description:
      "We start with 'why.' Our consultants partner with you to define product strategy, optimize your growth engine, and build a roadmap for success.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Team Augmentation & Integration",
    description:
      "Seamlessly embed our elite, product-minded talent into your existing teams. We provide the specific expertise you need to fill gaps and accelerate your workflow.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Managed Teams & Pods",
    description:
      "Deploy a dedicated, cross-functional team that operates as an autonomous unit to own a product, feature, or initiative from start to finish.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Code,
    title: "Full-Cycle Product Development",
    description:
      "From a napkin sketch to a market-ready product, our studio model handles the entire lifecycle of design, development, and delivery.",
    gradient: "from-orange-500 to-red-500",
  },
]

export function SolutionsOverview() {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          An Integrated Approach to Growth
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16"
        >
          Our services are not silos; they are interconnected components of a powerful growth engine, designed to
          provide exactly what you need, when you need it.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-gray-900/50 border border-white/10 overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <motion.div
                className={`absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br ${solution.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-125`}
              />

              <div className="relative z-10">
                <motion.div
                  className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
