"use client"

import { motion } from "framer-motion"
import { Search, DraftingCompass, Rocket, Repeat } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Deep Discovery",
    description:
      "We don't start with assumptions. We immerse ourselves in your business, market, and goals to build a foundational understanding of what success looks like.",
  },
  {
    icon: DraftingCompass,
    title: "Strategic Architecture",
    description:
      "Based on our discovery, we design the optimal solution—whether it's a team, a process, or a full product roadmap—architected for scalability and impact.",
  },
  {
    icon: Rocket,
    title: "Precision Deployment",
    description:
      "This is where vision meets velocity. We execute with speed and quality, integrating seamlessly into your workflows and providing transparent progress at every stage.",
  },
  {
    icon: Repeat,
    title: "Continuous Optimization",
    description:
      "Our partnership doesn't end at launch. We establish feedback loops, measure outcomes, and continuously iterate to ensure long-term growth and value.",
  },
]

const floatingAnimation = {
  animate: {
    x: [0, 3, -3, 0],
    y: [0, -3, 3, 0],
  },
  transition: {
    duration: 4,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export function MegaCodeMethod() {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          The Methodology for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Momentum</span>
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden lg:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-20"
              >
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Content - Left side for even indices, right side for odd */}
                  <div
                    className={`lg:w-5/12 relative z-30 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:order-3"}`}
                  >
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-inherit"
                      style={{
                        color: "#ffffff",
                        textShadow: "0 0 10px rgba(255,255,255,0.3)",
                        opacity: 1,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="leading-relaxed text-center lg:text-inherit"
                      style={{
                        color: "#d1d5db",
                        textShadow: "0 0 5px rgba(255,255,255,0.2)",
                        opacity: 1,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Icon - Always centered */}
                  <div className="lg:w-2/12 flex justify-center lg:order-2 my-8 lg:my-0 relative z-30">
                    <motion.div
                      {...floatingAnimation}
                      className="relative z-40 w-20 h-20 rounded-full bg-gray-900 border border-white/20 flex items-center justify-center text-purple-400 shadow-lg"
                    >
                      <step.icon className="w-10 h-10" />
                    </motion.div>
                  </div>

                  {/* Spacer for layout balance */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? "lg:order-3" : ""}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
