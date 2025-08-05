"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, Rocket, Trophy } from "lucide-react"

const playbook = [
  {
    value: "ideation",
    title: "Ideation & MVP",
    icon: Lightbulb,
    items: ["Opportunity Analysis", "Market Validation", "MVP Prototyping & Strategy"],
  },
  {
    value: "growth",
    title: "Growth & Scale",
    icon: Rocket,
    items: ["Full-Stack Development", "Scalable Cloud Architecture", "Strategic Team Augmentation"],
  },
  {
    value: "leadership",
    title: "Market Leadership",
    icon: Trophy,
    items: ["Enterprise Feature Development", "AI & Machine Learning Integration", "Fundraising Technical Support"],
  },
]

export function GrowthPlaybook() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-red-950/30 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Your End-to-End Growth Playbook</h2>
          <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Complete solutions for every stage of your company's journey.
          </p>
        </motion.div>

        <Tabs defaultValue="ideation" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10 p-2 rounded-xl backdrop-blur-sm">
            {playbook.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-red-700 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg text-gray-300 py-3"
              >
                <tab.icon className="w-5 h-5 mr-2 hidden md:inline-block" />
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {playbook.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <motion.div
                className="mt-8 p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="space-y-4">
                  {tab.items.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center text-lg text-gray-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 mr-4"></div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
