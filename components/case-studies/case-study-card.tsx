import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
  slug: string
  title: string
  subtitle: string
  client: string
  industry: string
  timeline: string
  keyMetrics: Array<{
    icon: React.ComponentType<{ className?: string }>
    value: string
    label: string
  }>
  challenge: string
  result: string
  services: string[]
}

export function CaseStudyCard({
  slug,
  title,
  subtitle,
  client,
  industry,
  timeline,
  keyMetrics,
  challenge,
  result,
  services,
}: CaseStudyCardProps) {
  return (
    <Card className="border-2 border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm text-red-600 font-semibold mb-2">{client}</div>
            <CardTitle className="text-2xl font-bold text-black mb-2">{title}</CardTitle>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div>{industry}</div>
            <div>{timeline}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <metric.icon className="w-5 h-5 text-red-600" />
              </div>
              <div className="text-lg font-bold text-black">{metric.value}</div>
              <div className="text-xs text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-black mb-2">The Challenge</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">The Result</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{result}</p>
        </div>

        <div>
          <h4 className="font-semibold text-black mb-2">Services Provided</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span key={index} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full border border-red-200">
                {service}
              </span>
            ))}
          </div>
        </div>

        <Link href={`/case-studies/${slug}`}>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            Read Full Case Study
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
