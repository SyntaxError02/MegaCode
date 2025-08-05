"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

interface FormData {
  // Step 1
  name: string
  email: string
  company: string
  location: string
  source: string

  // Step 2
  hiringType: string
  timeline: string
  budgetRange: string
  teamSize: string

  // Step 3
  techStack: string
  projectDescription: string
  skillRequirements: string
  additionalContext: string
}

export function ProgressiveContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    location: "",
    source: "",
    hiringType: "",
    timeline: "",
    budgetRange: "",
    teamSize: "",
    techStack: "",
    projectDescription: "",
    skillRequirements: "",
    additionalContext: "",
  })

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    // Here you would integrate with your backend/CRM
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const isStep1Valid = formData.name && formData.email && formData.company
  const isStep2Valid = formData.hiringType && formData.timeline && formData.budgetRange

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto border-2 border-green-200">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-black mb-4">Thank You!</h3>
          <p className="text-gray-600 mb-6">We'll respond within 24 hours with your custom team proposal.</p>
          <div className="space-y-4">
            <Button className="w-full bg-red-600 hover:bg-red-700">Schedule Immediate Call</Button>
            <p className="text-sm text-gray-500">Urgent? WhatsApp us at +234-XXX-XXXX</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto border-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Get Your Custom Team Quote</span>
          <span className="text-sm font-normal text-gray-500">Step {currentStep} of 3</span>
        </CardTitle>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => updateFormData("location", e.target.value)}
                  placeholder="San Francisco, CA"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="source">How did you hear about us?</Label>
              <Select value={formData.source} onValueChange={(value) => updateFormData("source", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Needs</h3>

            <div>
              <Label>Hiring Type *</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {[
                  { value: "team", label: "Complete Team" },
                  { value: "individual", label: "Individual Talent" },
                  { value: "consulting", label: "Consulting" },
                  { value: "mixed", label: "Mixed Approach" },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.value}
                      checked={formData.hiringType === option.value}
                      onCheckedChange={() => updateFormData("hiringType", option.value)}
                    />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Timeline *</Label>
                <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP (Within 2 weeks)</SelectItem>
                    <SelectItem value="month">Within 1 month</SelectItem>
                    <SelectItem value="quarter">Within 3 months</SelectItem>
                    <SelectItem value="planning">Just planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Budget Range *</Label>
                <Select value={formData.budgetRange} onValueChange={(value) => updateFormData("budgetRange", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-25k">$10k - $25k/month</SelectItem>
                    <SelectItem value="25-50k">$25k - $50k/month</SelectItem>
                    <SelectItem value="50-100k">$50k - $100k/month</SelectItem>
                    <SelectItem value="100k+">$100k+/month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Team Size Needed</Label>
              <Select value={formData.teamSize} onValueChange={(value) => updateFormData("teamSize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 people</SelectItem>
                  <SelectItem value="4-6">4-6 people</SelectItem>
                  <SelectItem value="7-10">7-10 people</SelectItem>
                  <SelectItem value="10+">10+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Details</h3>

            <div>
              <Label htmlFor="techStack">Current Tech Stack</Label>
              <Input
                id="techStack"
                value={formData.techStack}
                onChange={(e) => updateFormData("techStack", e.target.value)}
                placeholder="React, Node.js, PostgreSQL, AWS..."
              />
            </div>

            <div>
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea
                id="projectDescription"
                value={formData.projectDescription}
                onChange={(e) => updateFormData("projectDescription", e.target.value)}
                placeholder="Tell us about your project, goals, and challenges..."
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="skillRequirements">Specific Skill Requirements</Label>
              <Textarea
                id="skillRequirements"
                value={formData.skillRequirements}
                onChange={(e) => updateFormData("skillRequirements", e.target.value)}
                placeholder="Any specific technologies, frameworks, or experience needed..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="additionalContext">Additional Context</Label>
              <Textarea
                id="additionalContext"
                value={formData.additionalContext}
                onChange={(e) => updateFormData("additionalContext", e.target.value)}
                placeholder="Anything else we should know about your project or requirements..."
                rows={3}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < 3 ? (
            <Button
              onClick={nextStep}
              disabled={currentStep === 1 ? !isStep1Valid : currentStep === 2 ? !isStep2Valid : false}
              className="bg-red-600 hover:bg-red-700 flex items-center gap-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
              Get My Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
