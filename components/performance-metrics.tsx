"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { TrendingUp, DollarSign, Users, Rocket } from "lucide-react"

const metrics = [
  {
    value: 3,
    suffix: "x",
    label: "Faster OKR Achievement",
    description: "Teams achieve their objectives and key results 3x faster with our integrated approach",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
  },
  {
    value: 50,
    prefix: "$",
    suffix: "M+",
    label: "Value Created for Partners",
    description: "Total value generated across our client portfolio through strategic partnerships",
    icon: DollarSign,
    color: "from-pink-500 to-orange-500",
  },
  {
    value: 200,
    suffix: "+",
    label: "Professionals Deployed",
    description: "Elite developers, designers, and strategists integrated into client teams",
    icon: Users,
    color: "from-orange-500 to-yellow-500",
  },
  {
    value: 50,
    suffix: "+",
    label: "Successful Exits & Scale-ups",
    description: "Companies we've helped achieve successful exits or significant scale milestones",
    icon: Rocket,
    color: "from-yellow-500 to-purple-500",
  },
]

export function PerformanceMetrics() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Velocity, by the Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our track record speaks for itself. These metrics represent real outcomes for real companies who chose to
            accelerate with MegaCode.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
              >
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${metric.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="text-center">
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                  >
                    {metric.prefix}
                    <AnimatedCounter end={metric.value} duration={2000 + index * 200} />
                    {metric.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{metric.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{metric.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to add your success story to these numbers?
            <span className="font-semibold text-gray-900"> Let's accelerate your growth together.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
