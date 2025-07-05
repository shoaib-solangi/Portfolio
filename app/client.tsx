"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navigation from "@/components/navigation"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import CursorFollower from "@/components/cursor-follower"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LoadingScreen />
        <CursorFollower />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navigation />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
