"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, MessageCircle, Clock } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"

const values = [
  {
    icon: DollarSign,
    title: "Cost Savings Up to 60%",
    description: "Get premium talent at a fraction of Silicon Valley costs without compromising on quality.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "Developers That Stay 4+ Years",
    description: "Our talent has exceptional retention rates, reducing your hiring and onboarding costs.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: MessageCircle,
    title: "English Fluency & Clear Communication",
    description: "Native and fluent English speakers with excellent communication skills and cultural fit.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Clock,
    title: "Same-Day Collaboration",
    description: "Perfect timezone overlap with EU/US teams for real-time collaboration and faster delivery.",
    color: "from-orange-500 to-red-600",
  },
]

export function ValueGridAnimated() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Global Startups Choose
            <motion.span
              className="text-red-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {" "}
              MegaCode
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We've solved the challenges of remote hiring by connecting you with Africa's top 1% of tech talent.
          </motion.p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -10, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="border-2 border-gray-100 hover:border-red-200 transition-all duration-300 group h-full relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />

                  <CardContent className="p-8 text-center relative">
                    <motion.div
                      className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-all duration-300 relative overflow-hidden"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                        <value.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </motion.div>

                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 bg-red-600 rounded-full opacity-0"
                        whileHover={{
                          scale: [1, 1.5],
                          opacity: [0, 0.1, 0],
                        }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {value.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      viewport={{ once: true }}
                    >
                      {value.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
