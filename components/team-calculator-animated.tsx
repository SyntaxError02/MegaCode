"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign, TrendingDown, Sparkles } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FadeIn } from "@/components/ui/fade-in"
import Link from "next/link"

interface TeamMember {
  role: string
  junior: number
  mid: number
  senior: number
}

const roles: TeamMember[] = [
  { role: "Product Manager", junior: 3000, mid: 4000, senior: 5000 },
  { role: "Frontend Developer", junior: 3500, mid: 4500, senior: 5500 },
  { role: "Backend Developer", junior: 3500, mid: 4500, senior: 5500 },
  { role: "Full-stack Developer", junior: 4000, mid: 5000, senior: 6000 },
  { role: "UI/UX Designer", junior: 2500, mid: 3500, senior: 4000 },
  { role: "QA Engineer", junior: 2000, mid: 2500, senior: 3000 },
  { role: "Scrum Master", junior: 3000, mid: 4000, senior: 4500 },
  { role: "Data Analyst", junior: 2000, mid: 3000, senior: 3500 },
]

export function TeamCalculatorAnimated() {
  const [selectedRoles, setSelectedRoles] = useState<Record<string, { count: number; level: string }>>({})
  const [contractDuration, setContractDuration] = useState("monthly")
  const [totalCost, setTotalCost] = useState(0)
  const [usSavings, setUsSavings] = useState(0)
  const [indiaPremium, setIndiaPremium] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)

  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => {
      let monthly = 0
      let usEquivalent = 0
      let indiaEquivalent = 0

      Object.entries(selectedRoles).forEach(([role, config]) => {
        const roleData = roles.find((r) => r.role === role)
        if (roleData && config.count > 0) {
          const rate = roleData[config.level as keyof Omit<TeamMember, "role">]
          monthly += rate * config.count
          usEquivalent += rate * 3 * config.count
          indiaEquivalent += rate * 0.8 * config.count
        }
      })

      const finalCost = contractDuration === "annual" ? monthly * 0.9 : monthly
      setTotalCost(finalCost)
      setUsSavings(usEquivalent - finalCost)
      setIndiaPremium(finalCost - indiaEquivalent)
      setIsCalculating(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedRoles, contractDuration])

  const handleRoleToggle = (role: string, checked: boolean) => {
    if (checked) {
      setSelectedRoles((prev) => ({
        ...prev,
        [role]: { count: 1, level: "mid" },
      }))
    } else {
      setSelectedRoles((prev) => {
        const newRoles = { ...prev }
        delete newRoles[role]
        return newRoles
      })
    }
  }

  const updateRoleConfig = (role: string, field: "count" | "level", value: number | string) => {
    setSelectedRoles((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [field]: value,
      },
    }))
  }

  return (
    <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-red-500/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/5 rounded-full"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Calculate Your
            <motion.span
              className="text-red-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {" "}
              Team Cost
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Build your perfect team and see instant pricing. No hidden fees, no surprises.
          </motion.p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Team Builder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Calculator className="w-6 h-6 text-red-600" />
                  </motion.div>
                  Build Your Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">Contract Duration</label>
                  <Select value={contractDuration} onValueChange={setContractDuration}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly (Standard Rate)</SelectItem>
                      <SelectItem value="annual">Annual (10% Discount)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-semibold text-gray-700 block">Select Team Members</label>
                  {roles.map((role, index) => (
                    <motion.div
                      key={role.role}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Checkbox
                          id={role.role}
                          checked={!!selectedRoles[role.role]}
                          onCheckedChange={(checked) => handleRoleToggle(role.role, checked as boolean)}
                        />
                        <label htmlFor={role.role} className="font-medium cursor-pointer">
                          {role.role}
                        </label>
                      </motion.div>

                      <AnimatePresence>
                        {selectedRoles[role.role] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-6 grid grid-cols-2 gap-4"
                          >
                            <div>
                              <label className="text-xs text-gray-600 block mb-1">Count</label>
                              <Select
                                value={selectedRoles[role.role].count.toString()}
                                onValueChange={(value) => updateRoleConfig(role.role, "count", Number.parseInt(value))}
                              >
                                <SelectTrigger className="h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-xs text-gray-600 block mb-1">Level</label>
                              <Select
                                value={selectedRoles[role.role].level}
                                onValueChange={(value) => updateRoleConfig(role.role, "level", value)}
                              >
                                <SelectTrigger className="h-8">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="junior">Junior</SelectItem>
                                  <SelectItem value="mid">Mid</SelectItem>
                                  <SelectItem value="senior">Senior</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cost Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-50"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <CardHeader className="bg-red-50 relative">
                <CardTitle className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <DollarSign className="w-6 h-6 text-red-600" />
                  </motion.div>
                  Your Investment
                  {totalCost > 0 && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6 relative">
                <div className="text-center">
                  <AnimatePresence mode="wait">
                    {isCalculating ? (
                      <motion.div
                        key="calculating"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-2xl text-gray-500"
                      >
                        Calculating...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-4xl font-bold text-black mb-2">
                          $<AnimatedCounter end={totalCost} />
                          <span className="text-lg text-gray-600">/month</span>
                        </div>
                        <p className="text-gray-600">Total team cost</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <AnimatePresence>
                  {usSavings > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="bg-green-50 p-4 rounded-lg border border-green-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <TrendingDown className="w-5 h-5 text-green-600" />
                        </motion.div>
                        <span className="font-semibold text-green-800">US Savings</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        $<AnimatedCounter end={usSavings} />
                        /month
                      </div>
                      <p className="text-sm text-green-700">
                        <AnimatedCounter end={Math.round((usSavings / (totalCost + usSavings)) * 100)} />% less than US
                        equivalent
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {indiaPremium > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-blue-50 p-4 rounded-lg border border-blue-200"
                    >
                      <div className="font-semibold text-blue-800 mb-2">vs India Comparison</div>
                      <div className="text-lg font-bold text-blue-600">
                        +$
                        <AnimatedCounter end={indiaPremium} />
                        /month premium
                      </div>
                      <p className="text-sm text-blue-700">For timezone alignment & 4-year retention</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  className="space-y-3 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[
                    "✓ Pre-vetted professionals",
                    "✓ Cultural fit assessment",
                    "✓ Time tracking & reporting",
                    "✓ Performance guarantees",
                    "✓ Monthly scaling flexibility",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="flex justify-between"
                    >
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white group" size="lg">
                      Get Started
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                    </Button>
                  </Link>
                </motion.div>

                <p className="text-xs text-center text-gray-500">No setup fees • No hidden costs • Cancel anytime</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
