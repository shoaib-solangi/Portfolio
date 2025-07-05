"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Bookmark, Eye } from "lucide-react"
import { useRouter } from "next/navigation"

interface PageHeaderProps {
  title: string
  description?: string
  badge?: string
  showBack?: boolean
  showShare?: boolean
  showBookmark?: boolean
  views?: number
  children?: React.ReactNode
}

export default function PageHeader({
  title,
  description,
  badge,
  showBack = false,
  showShare = false,
  showBookmark = false,
  views,
  children,
}: PageHeaderProps) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mb-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl -z-10" />

      <div className="relative p-8 md:p-12">
        {/* Top Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            {showBack && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.back()}
                  className="bg-background/50 backdrop-blur-sm"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </motion.div>
            )}
            {badge && <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">{badge}</Badge>}
          </div>

          <div className="flex items-center space-x-2">
            {views && (
              <div className="flex items-center space-x-1 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
                <Eye className="h-4 w-4" />
                <span>{views.toLocaleString()}</span>
              </div>
            )}
            {showBookmark && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur-sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
            {showShare && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="bg-background/50 backdrop-blur-sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Title and Description */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
