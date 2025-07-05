"use client"

import type React from "react"

import { Inter } from "next/font/google"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import { Toaster } from "sonner"
import CursorFollower from "./components/cursor-follower"
import Footer from "./components/footer"
import LoadingScreen from "./components/loading-screen"
import { ThemeProvider } from "./components/theme-provider"
import Navigation from "./components/navigation"


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
          <main className="min-h-screen">
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
