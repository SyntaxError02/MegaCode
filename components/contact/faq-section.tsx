"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "Is this just another outsourcing firm?",
    answer:
      "No. We are a strategic talent partner. Unlike traditional outsourcing, we integrate deeply into your team, co-own your roadmap, and provide proactive guidance to ensure your success. We focus on outcomes, not just outputs.",
  },
  {
    question: "How quickly can we actually get started?",
    answer:
      "Our process is built for velocity. From initial contact to having a team member ready to start can take as little as 7-10 days. We eliminate bureaucratic delays to get you moving faster.",
  },
  {
    question: "What does 'strategic partnership' really mean?",
    answer:
      "It means we're in it with you for the long haul. We provide not just elite technical talent, but also strategic oversight, best practices from hundreds of projects, and a commitment to your business goals. Your success is our metric.",
  },
  {
    question: "Can you help if our strategy isn't fully defined yet?",
    answer:
      "Absolutely. In fact, that's an ideal time to talk. Our initial strategy calls are designed to help you clarify your needs, define the right team composition, and build a roadmap for success. We're experts at turning ambiguity into action.",
  },
  {
    question: "What kind of commitment is required?",
    answer:
      "We offer flexible engagements tailored to your needs, from augmenting your team with a single specialist to building out a full product team. We believe in earning your business every month, with no long-term lock-ins required.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Answering Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">Key information to help you make the right decision.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl px-6"
              >
                <AccordionTrigger className="text-lg text-left font-semibold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
