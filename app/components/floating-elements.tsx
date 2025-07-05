"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, Phone, Mail, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const floatingActions = [
    { icon: MessageCircle, label: "Chat", color: "from-blue-500 to-blue-600" },
    { icon: Phone, label: "Call", color: "from-green-500 to-green-600" },
    { icon: Mail, label: "Email", color: "from-purple-500 to-purple-600" },
    { icon: Zap, label: "Quick", color: "from-orange-500 to-orange-600" },
  ]

  return (
    <>
      {/* Floating Action Buttons */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3"
      >
        {floatingActions.map((action, index) => (
          <motion.div
            key={action.label}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            <Button
              size="icon"
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <action.icon className="h-5 w-5 text-white" />
            </Button>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-background border border-border rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {action.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </>
  )
}
