"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign, TrendingDown } from "lucide-react"
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

export function TeamCalculator() {
  const [selectedRoles, setSelectedRoles] = useState<Record<string, { count: number; level: string }>>({})
  const [contractDuration, setContractDuration] = useState("monthly")
  const [totalCost, setTotalCost] = useState(0)
  const [usSavings, setUsSavings] = useState(0)
  const [indiaPremium, setIndiaPremium] = useState(0)

  useEffect(() => {
    let monthly = 0
    let usEquivalent = 0
    let indiaEquivalent = 0

    Object.entries(selectedRoles).forEach(([role, config]) => {
      const roleData = roles.find((r) => r.role === role)
      if (roleData && config.count > 0) {
        const rate = roleData[config.level as keyof Omit<TeamMember, "role">]
        monthly += rate * config.count

        // US equivalent (3x higher)
        usEquivalent += rate * 3 * config.count

        // India equivalent (20% lower)
        indiaEquivalent += rate * 0.8 * config.count
      }
    })

    const finalCost = contractDuration === "annual" ? monthly * 0.9 : monthly
    setTotalCost(finalCost)
    setUsSavings(usEquivalent - finalCost)
    setIndiaPremium(finalCost - indiaEquivalent)
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
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Calculate Your
            <span className="text-red-600"> Team Cost</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your perfect team and see instant pricing. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Team Builder */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-red-600" />
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
                {roles.map((role) => (
                  <div key={role.role} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={role.role}
                        checked={!!selectedRoles[role.role]}
                        onCheckedChange={(checked) => handleRoleToggle(role.role, checked as boolean)}
                      />
                      <label htmlFor={role.role} className="font-medium">
                        {role.role}
                      </label>
                    </div>

                    {selectedRoles[role.role] && (
                      <div className="ml-6 grid grid-cols-2 gap-4">
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
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cost Summary */}
          <Card className="border-2 border-red-200">
            <CardHeader className="bg-red-50">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-red-600" />
                Your Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-black mb-2">
                  ${totalCost.toLocaleString()}
                  <span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Total team cost</p>
              </div>

              {usSavings > 0 && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">US Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">${usSavings.toLocaleString()}/month</div>
                  <p className="text-sm text-green-700">
                    {Math.round((usSavings / (totalCost + usSavings)) * 100)}% less than US equivalent
                  </p>
                </div>
              )}

              {indiaPremium > 0 && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-800 mb-2">vs India Comparison</div>
                  <div className="text-lg font-bold text-blue-600">+${indiaPremium.toLocaleString()}/month premium</div>
                  <p className="text-sm text-blue-700">For timezone alignment & 4-year retention</p>
                </div>
              )}

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>✓ Pre-vetted professionals</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Cultural fit assessment</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Time tracking & reporting</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Performance guarantees</span>
                </div>
                <div className="flex justify-between">
                  <span>✓ Monthly scaling flexibility</span>
                </div>
              </div>

              <Link href="/contact">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                  Get Started
                </Button>
              </Link>

              <p className="text-xs text-center text-gray-500">No setup fees • No hidden costs • Cancel anytime</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
