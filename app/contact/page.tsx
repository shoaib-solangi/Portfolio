"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm } from "./actions"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ahmad.khan@example.com",
      description: "Send me an email anytime",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 1234567",
      description: "Call me during business hours",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      description: "Available for remote work worldwide",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
      color: "from-orange-400 to-orange-600",
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-red-400" },
  ]

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary depending on complexity, but most web projects take 2-6 weeks from start to finish.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients worldwide and am comfortable with different time zones and communication preferences.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Next.js, TypeScript, Node.js, and modern web technologies. I'm always learning new tools.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I offer maintenance and support packages to keep your project running smoothly after launch.",
    },
  ]

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      })
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear from you. Let's
            create something amazing together!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full text-center bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-purple-400 mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3 text-purple-400" />
                  Send Me a Message
                </CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="contact-form" action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" required placeholder="Your full name" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget (Optional)</Label>
                    <Input
                      id="budget"
                      name="budget"
                      placeholder="e.g., $5,000 - $10,000"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline (Optional)</Label>
                    <Input id="timeline" name="timeline" placeholder="e.g., 2-3 months" className="bg-background/50" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      className="bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
                <CardDescription>Follow me on social media for updates and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-full bg-muted hover:bg-purple-500/20 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-green-500" />
                  Current Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Available for new projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Accepting freelance work</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Open to collaborations</span>
                  </div>
                  <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-sm text-green-400 font-medium">
                      🟢 Currently accepting new projects starting February 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-border/50 pb-4 last:border-b-0"
                    >
                      <h4 className="font-semibold text-sm mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a clear vision or just an idea, I'm here to help bring it to life. Let's discuss your
            project and see how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Send Quick Email
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
