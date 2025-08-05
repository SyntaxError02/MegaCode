"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "MegaCode transformed our entire approach to product development. Their team didn't just deliver code—they delivered strategic thinking that accelerated our path to market leadership.",
    author: "Franklin Nsude",
    role: "CEO, Ultiblob",
    image: "/franklin-nsude-headshot.png",
  },
  {
    quote:
      "The level of strategic insight and execution quality from MegaCode is unmatched. They became true partners in our growth journey, not just service providers.",
    author: "Marcus Rodriguez",
    role: "CTO, Primitive Haus",
    image: "/professional-man-headshot.png",
  },
]

export function ClientTestimonials() {
  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
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
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                Partners
              </span>{" "}
              Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about partnering with MegaCode for their
              strategic growth initiatives.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="relative group h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Quote className="w-12 h-12 text-purple-400 mb-4" />
                        <p className="text-lg text-gray-300 leading-relaxed italic">"{testimonial.quote}"</p>
                      </div>

                      <div className="flex items-center mt-auto">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500/20">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-lg">{testimonial.author}</h4>
                          <p className="text-purple-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
