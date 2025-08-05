"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Sparkles, Heart } from "lucide-react"
import { GradientOrb } from "@/components/ui/gradient-orb"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <GradientOrb
        size={300}
        color1="#ef4444"
        color2="#3b82f6"
        className="top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        opacity={0.03}
      />
      <GradientOrb
        size={200}
        color1="#8b5cf6"
        color2="#06b6d4"
        className="bottom-0 right-0 translate-x-1/2 translate-y-1/2"
        opacity={0.02}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-3">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Link href="/" className="flex items-center mb-6 group">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <span className="text-2xl font-bold">
                  Mega<span className="text-red-600">Code</span>
                </span>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="w-3 h-3 text-red-500 opacity-60" />
                </motion.div>
              </motion.div>
            </Link>
            <motion.p className="text-gray-400 mb-6 leading-relaxed">
              Connecting global startups with premium African tech talent.
            </motion.p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <a 
                  href="https://www.linkedin.com/company/megacodedigital/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BiTgtSpq0QXKaqfjuBcBueg%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <a 
                  href="https://x.com/megacodedigital?s=21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <a 
                  href="https://www.instagram.com/megacodedigital?igsh=Mm5tOHgzenk4emdj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <svg className="w-6 h-6 text-gray-400 hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { href: "/services#talent", label: "MegaCode Talent" },
                { href: "/services#studio", label: "MegaCode Studio" },
                { href: "/services#think-tank", label: "Think Tank" },
                { href: "/services#strategy", label: "Mega Strategy" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={item.href} className="hover:text-white transition-colors relative group">
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { href: "/about", label: "About Us" },
                { href: "/why-us", label: "Why Us" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/contact", label: "Contact" },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={item.href} className="hover:text-white transition-colors relative group">
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { icon: Mail, text: "support@megacodellc.com" },
                { icon: MapPin, text: "Dallas, TX" },
                { icon: MapPin, text: "San Francisco, CA" },
                { icon: MapPin, text: "Lagos, Nigeria" },
                { icon: MapPin, text: "Nairobi, Kenya" },
                { icon: MapPin, text: "Cape Town, South Africa" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 group cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.2 }}>
                    <item.icon className="w-4 h-4 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400 relative"
        >
          <motion.p className="relative z-10">
            &copy; 2024 MegaCode. All rights reserved. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block"
            >
              <Heart className="w-4 h-4 text-red-500 inline" />
            </motion.span>{" "}
            for ambitious startups.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
