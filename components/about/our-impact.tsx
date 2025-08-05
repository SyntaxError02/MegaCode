"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { Users, Globe, Clock, TrendingUp, Zap } from "lucide-react"

const metrics = [
  {
    icon: Users,
    value: "200",
    suffix: "+",
    label: "Strategic Minds Deployed",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Globe,
    value: "75",
    suffix: "+",
    label: "US & EU Clients",
    color: "from-pink-500 to-orange-400",
  },
  {
    icon: Clock,
    value: "4",
    suffix: "",
    label: "Year Average Partner Alignment",
    color: "from-orange-400 to-yellow-400",
  },
  {
    icon: TrendingUp,
    value: "92",
    suffix: "%",
    label: "Client Retention Rate",
    color: "from-yellow-400 to-green-400",
  },
  {
    icon: Zap,
    value: "4",
    suffix: "x",
    label: "Faster Time-to-Velocity",
    color: "from-green-400 to-blue-400",
  },
]

export function OurImpact() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Results of a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                Better Model
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When strategy meets execution, extraordinary outcomes follow. Here's the measurable impact of our
              integrated approach to building world-class teams.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {metrics.map((metric, index) => (
              <StaggerItem key={index}>
                <motion.div className="relative group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-300">
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${metric.color} p-0.5`}>
                        <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                          <metric.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3
                        className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.color}`}
                      >
                        {metric.value}
                        {metric.suffix}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">{metric.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <FadeIn delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              These aren't just numbers—they represent transformed businesses, accelerated growth, and the compound
              effect of strategic talent deployment. When you partner with us, you're not just hiring; you're investing
              in measurable momentum.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
