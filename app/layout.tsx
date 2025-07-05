import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./client"

export const metadata: Metadata = {
  title: "Ahmad Khan - Full Stack Developer",
  description: "Professional portfolio of Ahmad Khan - Full Stack Developer & UI/UX Designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
