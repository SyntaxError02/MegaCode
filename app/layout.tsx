import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MegaCode - Premium African Tech Talent for Startups",
  description:
    "Hire vetted product managers, designers, developers, and analysts from Africa. Save up to 60% while getting world-class talent.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>MegaCode - Premium African Tech Talent for Startups</title>
        <meta name="description" content="Hire vetted product managers, designers, developers, and analysts from Africa. Save up to 60% while getting world-class talent." />
        <meta property="og:title" content="MegaCode - Premium African Tech Talent for Startups" />
        <meta property="og:description" content="Hire vetted product managers, designers, developers, and analysts from Africa. Save up to 60% while getting world-class talent." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://megacodellc.com" />
        <meta property="og:image" content="/MegaCode Favicon/android-chrome-512x512.png" />
        <meta property="og:site_name" content="MegaCode" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MegaCode - Premium African Tech Talent for Startups" />
        <meta name="twitter:description" content="Hire vetted product managers, designers, developers, and analysts from Africa. Save up to 60% while getting world-class talent." />
        <meta name="twitter:image" content="/MegaCode Favicon/android-chrome-512x512.png" />
        <link rel="icon" href="/MegaCode Favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
