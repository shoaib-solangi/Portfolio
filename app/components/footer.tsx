"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Send,
  Code,
  Palette,
  Smartphone,
  Server,
  ExternalLink,
  Calendar,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "./use.toast"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services#web" },
        { label: "Mobile Apps", href: "/services#mobile" },
        { label: "UI/UX Design", href: "/services#design" },
        { label: "Backend Development", href: "/services#backend" },
        { label: "E-commerce", href: "/services#ecommerce" },
        { label: "Consulting", href: "/services#consulting" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog Articles", href: "/blog" },
        { label: "Case Studies", href: "/projects" },
        { label: "Free Templates", href: "#", external: true },
        { label: "Code Snippets", href: "#", external: true },
        { label: "Design Assets", href: "#", external: true },
        { label: "Developer Tools", href: "#", external: true },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com", external: true },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "Twitter", href: "https://twitter.com", external: true },
        { label: "Discord", href: "#", external: true },
        { label: "Telegram", href: "#", external: true },
        { label: "WhatsApp", href: "#", external: true },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:ahmad@example.com", label: "Email", color: "hover:text-red-400" },
  ]

  const skills = [
    { name: "React", icon: Code, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", icon: Server, color: "from-gray-400 to-gray-600" },
    { name: "TypeScript", icon: Code, color: "from-blue-500 to-blue-700" },
    { name: "Node.js", icon: Server, color: "from-green-400 to-green-600" },
    { name: "UI/UX", icon: Palette, color: "from-pink-400 to-pink-600" },
    { name: "Mobile", icon: Smartphone, color: "from-purple-400 to-purple-600" },
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Successfully subscribed! 🎉",
      description:
        "Thank you for subscribing to my newsletter. You'll receive updates about new projects and articles.",
    })

    setEmail("")
    setIsSubscribing(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-background border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Main Footer Content */}
      <div className="relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-border/50 py-16"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subscribe to my newsletter for the latest updates on projects, articles, and web development insights.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 backdrop-blur-sm"
                required
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isSubscribing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Subscribe
                  </>
                )}
              </Button>
            </motion.form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground mt-4"
            >
              No spam, unsubscribe at any time. Join 500+ developers already subscribed.
            </motion.p>
          </div>
        </motion.div>

        {/* Main Footer Links */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-lg">AK</span>
                    </motion.div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Ahmad Khan
                      </div>
                      <div className="text-sm text-muted-foreground">Full Stack Developer</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Crafting digital experiences with modern technologies. Specialized in React, Next.js, and full-stack
                    development.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span className="text-muted-foreground">Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span className="text-muted-foreground">ahmad@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-purple-400" />
                    <span className="text-muted-foreground">+92 300 1234567</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-full bg-muted hover:bg-purple-500/20 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-foreground mb-4 flex items-center">
                    {section.title}
                    <div className="ml-2 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-purple-400 transition-colors text-sm flex items-center group"
                          {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                          {link.external && (
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-12"
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold mb-2">Technologies I Work With</h3>
              <p className="text-sm text-muted-foreground">Always learning and exploring new technologies</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge
                    variant="secondary"
                    className={`bg-gradient-to-r ${skill.color} text-white border-none px-4 py-2 flex items-center space-x-2`}
                  >
                    <skill.icon className="h-3 w-3" />
                    <span>{skill.name}</span>
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-sm text-muted-foreground"
              >
                <span>© {currentYear} Ahmad Khan. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </motion.div>
                <span>and lots of ☕</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm"
              >
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>Response within 24h</span>
                </div>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-shadow"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
