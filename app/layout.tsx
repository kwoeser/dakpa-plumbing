import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Bhoepa Plumbing - Portland's Most Trusted Plumbing Service",
  description: "Professional plumbing services in Portland, OR. Available 24/7 for emergency repairs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" href="/tibet.svg" sizes="any" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}

