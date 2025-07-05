"use client"

import { motion } from "framer-motion"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { label: "Home", href: "/", icon: Home },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      const label = segment.charAt(0).toUpperCase() + segment.slice(1)
      return { label, href }
    }),
  ]

  if (pathname === "/") return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 bg-muted/30 px-4 py-3 rounded-xl backdrop-blur-sm"
    >
      {breadcrumbItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-2"
        >
          {index > 0 && <ChevronRight className="h-4 w-4" />}
          <Link
            href={item.href}
            className={`flex items-center space-x-1 hover:text-purple-400 transition-colors ${
              index === breadcrumbItems.length - 1 ? "text-purple-400 font-medium" : ""
            }`}
          >
            {item.icon && <item.icon className="h-4 w-4" />}
            <span>{item.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  )
}
