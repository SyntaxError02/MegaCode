"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Loader } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function MainContactForm() {
  const [showModal, setShowModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    try {
      const response = await fetch("https://formspree.io/f/xwpqezaz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      if (response.ok) {
        setShowModal(true)
        form.reset()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Discuss Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Goals</span>
          </h2>
          <p className="text-xl text-gray-400">Start the conversation. We're here to help.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/50 border border-gray-700/50 rounded-2xl shadow-2xl shadow-red-500/5"
        >
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Label htmlFor="name" className="text-gray-300 mb-2 block">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g., Jane Doe"
                  required
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300 mb-2 block">
                  Work Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="company" className="text-gray-300 mb-2 block">
                Company Name
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Your Company Inc."
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-300 mb-2 block">
                What's on your mind? <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project, scaling challenges, or strategic goals."
                rows={5}
                required
                className="bg-gray-800 border-gray-600 text-white"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? <Loader className="animate-spin mr-2" /> : <ArrowRight className="mr-2 w-5 h-5" />}
              {isSubmitting ? "Sending..." : "Get Started"}
            </Button>
          </form>
        </motion.div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Thanks for submitting!</h2>
            <p className="text-gray-700 mb-6">We will be with you shortly.</p>
            <Button
              onClick={() => router.push("/")}
              className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Return to Home Page
            </Button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
