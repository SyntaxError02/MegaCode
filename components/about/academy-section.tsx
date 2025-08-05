"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award, TrendingUp, Users, Zap, Star, Sparkles } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const academyFeatures = [
  {
    icon: BookOpen,
    title: "Technical Certifications",
    description: "Latest frameworks and technologies",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Sales Methodology Training",
    description: "Proven sales frameworks and techniques",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Customer Success Frameworks",
    description: "Best practices for client retention",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Communication Excellence",
    description: "Professional communication skills",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Industry Best Practices",
    description: "Cutting-edge methodologies",
    color: "from-pink-500 to-rose-600",
  },
]

const clientBenefits = [
  "Always up-to-date skills",
  "Faster onboarding",
  "Higher productivity",
  "Innovation mindset",
  "Continuous learning culture",
]

export function AboutAcademySection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/10 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 opacity-5"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Star className="w-20 h-20 text-blue-600" />
      </motion.div>

      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-blue-300/30 via-blue-300/10 to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-purple-300/30 via-purple-300/10 to-transparent"
          animate={{
            opacity: [0.8, 0.3, 0.8],
            scaleY: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8 relative"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(147, 51, 234, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
              ],
            }}
          >
            <GraduationCap className="w-10 h-10 text-blue-600" />
            {/* Floating sparkles around the icon */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2"
              animate={{
                rotate: [360, 0],
                scale: [1.3, 1, 1.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Star className="w-3 h-3 text-blue-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🎓 MegaCode
            <motion.span
              className="text-blue-600 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
            >
              {" "}
              Academy
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent font-semibold"
            >
              Tomorrow's skills, today
            </motion.span>
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We invest in our talent continuously. Academy-trained professionals stay ahead of the curve with the latest
            technologies, sales methodologies, and customer success best practices.
          </motion.p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Training Includes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-blue-200 bg-white/80 backdrop-blur-sm hover:border-blue-300 transition-all duration-300 h-full relative overflow-hidden">
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <CardHeader className="relative">
                <CardTitle className="text-2xl text-black flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  Training Includes
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-6">
                  {academyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group relative"
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0 relative overflow-hidden`}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        }}
                        animate={{
                          boxShadow: [
                            "0 4px 15px rgba(0,0,0,0.1)",
                            "0 8px 25px rgba(0,0,0,0.15)",
                            "0 4px 15px rgba(0,0,0,0.1)",
                          ],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <feature.icon className="w-6 h-6 text-white relative z-10" />
                        {/* Icon glow */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4
                          className="font-semibold text-black mb-1 group-hover:text-blue-600 transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {feature.title}
                        </motion.h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Client Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm hover:border-green-300 transition-all duration-300 h-full relative overflow-hidden">
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <CardHeader className="relative">
                <CardTitle className="text-2xl text-black flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Award className="w-6 h-6 text-green-600" />
                  </motion.div>
                  Client Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  {clientBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group relative"
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <motion.div
                        className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex-shrink-0 relative"
                        whileHover={{
                          scale: 1.5,
                          boxShadow: "0 0 15px rgba(34, 197, 94, 0.6)",
                        }}
                        transition={{ duration: 0.2 }}
                        animate={{
                          boxShadow: [
                            "0 0 5px rgba(34, 197, 94, 0.3)",
                            "0 0 15px rgba(34, 197, 94, 0.5)",
                            "0 0 5px rgba(34, 197, 94, 0.3)",
                          ],
                        }}
                      >
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 2, 1],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </motion.div>
                      <motion.span
                        className="text-gray-700 group-hover:text-green-600 group-hover:font-medium transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {benefit}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
