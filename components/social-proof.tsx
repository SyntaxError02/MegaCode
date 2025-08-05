"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Chef's Warehouse", src: "/Chef-warehouse-logo.png" },
  { name: "Indeed", src: "/indeed-logo.svg" },
  { name: "Bamboo Health", src: "/bamboo-health-logo.svg" },
  { name: "Everyday Health", src: "/everyday-health-logo.svg" },
  { name: "Chowdeck", src: "/chowdeck-logo.svg" },
  { name: "Cardinal Health", src: "/cardinal-health-logo.svg" },
  { name: "Insight Global", src: "/insight-global-logo.svg" },
  { name: "American Century Investments", src: "/american-century-logo.svg" },
  { name: "Microsoft", src: "/microsoft-logo.svg" },
  { name: "Allstate", src: "/allstate-logo.svg" },
  { name: "Primitive Haus", src: "/primitive-haus-logo.png" },
  { name: "Okra", src: "/okra-logo.svg" },
  { name: "Netflix", src: "/netflix-logo.svg" },
  { name: "Stellantis", src: "/stellantis-logo.svg" },
  { name: "Doormot", src: "/doormot-logo.png" },
  { name: "Ultiblob", src: "/ultiblob-logo.png" },
]

export function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare and fintech to entertainment and automotive, we partner with companies across every industry
            to accelerate their growth.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12"
            animate={{
              x: [0, -2010],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
