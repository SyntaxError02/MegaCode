"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MessageSquare, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Clock,
    title: "Real-Time Collaboration",
    description: "Your team works your hours. Seamless integration, no delays.",
  },
  {
    icon: MessageSquare,
    title: "Frictionless Communication",
    description: "Fluent, professional, and embedded in your culture from day one.",
  },
  {
    icon: ShieldCheck,
    title: "World-Class Infrastructure",
    description: "Enterprise-grade security and reliability, guaranteed.",
  },
]

export function FoundationOfExcellence() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-red-950/30 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Built on a Foundation of Operational Excellence</h2>
          <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Our strategic advantage is built upon a rock-solid operational core.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-white/5 border-white/10 h-full text-center hover:border-red-500/50 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center">
                    <pillar.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
