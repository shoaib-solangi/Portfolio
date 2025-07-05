"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Palette,
  Server,
  ShoppingCart,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Cross-browser Compatible"],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      price: "Starting from $2,000",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "Push Notifications", "Offline Support", "App Store Deployment"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      price: "Starting from $3,000",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      price: "Starting from $1,500",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"],
      technologies: ["Node.js", "Python", "PostgreSQL", "AWS"],
      price: "Starting from $2,500",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store development and integration",
      features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Responsive"],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      price: "Starting from $4,000",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing applications and websites",
      features: ["Code Optimization", "Database Tuning", "CDN Setup", "Monitoring"],
      technologies: ["Lighthouse", "GTMetrix", "New Relic", "Cloudflare"],
      price: "Starting from $1,000",
      color: "from-yellow-400 to-yellow-600",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements.",
      icon: Users,
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize the solution.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build the application with clean code, following best practices and thorough testing.",
      icon: Code,
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy the project and provide ongoing maintenance and support as needed.",
      icon: Zap,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Ahmad delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content:
        "Working with Ahmad was a pleasure. The mobile app he developed for us has received great feedback from our users.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Founder, DesignStudio",
      content:
        "The UI/UX design work was phenomenal. Ahmad understood our brand vision and translated it into a beautiful, functional design.",
      rating: 5,
    },
  ]

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
            My Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive digital solutions to help your business grow and succeed in the digital world. From
            concept to deployment, I've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/25">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mb-4 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="font-semibold text-purple-400 mb-3">{service.price}</p>
                    <Button className="w-full group-hover:bg-purple-600 transition-colors">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-purple-400 rounded-full flex items-center justify-center text-sm font-bold text-purple-400">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together. I'm here to help bring your
            ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
