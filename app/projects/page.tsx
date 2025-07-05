"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Github, Search, Filter, Calendar, Eye, Heart } from "lucide-react"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "E-commerce", "AI/ML"]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with payment integration, inventory management, and admin dashboard.",
      longDescription:
        "Built a comprehensive e-commerce solution from scratch including user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and a complete admin panel for inventory and order management.",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Prisma"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2024-01-15",
      views: 1250,
      likes: 89,
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      longDescription:
        "Developed a comprehensive task management application with real-time collaboration features, drag-and-drop kanban boards, team chat, file sharing, and detailed analytics dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Development",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023-11-20",
      views: 980,
      likes: 67,
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction processing.",
      longDescription:
        "Created a secure mobile banking app with features like biometric login, account management, fund transfers, bill payments, transaction history, and push notifications for account activities.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric Auth", "Push Notifications"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023-09-10",
      views: 1450,
      likes: 112,
      featured: true,
    },
    {
      id: 4,
      title: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing and machine learning capabilities.",
      longDescription:
        "Built an AI-powered chat application using OpenAI's GPT API with features like context awareness, conversation history, multiple chat rooms, and custom AI personalities.",
      image: "/placeholder.svg?height=300&width=400",
      category: "AI/ML",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "WebSocket", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023-07-05",
      views: 2100,
      likes: 156,
      featured: false,
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Modern restaurant website with online ordering system and table reservation functionality.",
      longDescription:
        "Designed and developed a complete restaurant website with online menu, ordering system, table reservations, customer reviews, and integration with payment gateways.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Development",
      technologies: ["Next.js", "Sanity CMS", "Stripe", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023-05-18",
      views: 750,
      likes: 45,
      featured: false,
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      description: "Mobile fitness application with workout tracking, nutrition logging, and progress analytics.",
      longDescription:
        "Developed a comprehensive fitness tracking app with workout plans, exercise library, nutrition tracking, progress photos, social features, and integration with wearable devices.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile App",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Health APIs"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023-03-22",
      views: 1100,
      likes: 78,
      featured: false,
    },
    {
      id: 7,
      title: "Portfolio Design System",
      description: "Complete design system and component library for portfolio websites.",
      longDescription:
        "Created a comprehensive design system with reusable components, design tokens, documentation, and Figma library for building consistent portfolio websites.",
      image: "/placeholder.svg?height=300&width=400",
      category: "UI/UX Design",
      technologies: ["Figma", "Storybook", "React", "Styled Components", "Design Tokens"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2023-01-10",
      views: 650,
      likes: 34,
      featured: false,
    },
    {
      id: 8,
      title: "Crypto Trading Dashboard",
      description: "Real-time cryptocurrency trading dashboard with advanced charts and portfolio management.",
      longDescription:
        "Built a sophisticated crypto trading dashboard with real-time price feeds, advanced charting, portfolio tracking, trading signals, and risk management tools.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Web Development",
      technologies: ["React", "D3.js", "WebSocket", "Node.js", "Redis", "TradingView"],
      githubUrl: "#",
      liveUrl: "#",
      date: "2022-12-08",
      views: 1800,
      likes: 134,
      featured: false,
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter((project) => project.featured)

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
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and projects. Each project represents a unique challenge and demonstrates
            different aspects of my skills and expertise.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 w-1 h-6 rounded-full mr-3"></span>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/25">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/30"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white">Featured</Badge>
                    <div className="absolute top-4 right-4 flex items-center space-x-2 text-white/80 text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{project.views}</span>
                      <Heart className="h-4 w-4" />
                      <span>{project.likes}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-purple-400 border-purple-400">
                        {project.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(project.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-purple-400 transition-colors">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 w-1 h-6 rounded-full mr-3"></span>
            All Projects ({filteredProjects.length})
          </h2>

          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex items-center space-x-2 text-white/80 text-sm">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white">Featured</Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-purple-400 border-purple-400">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(project.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-purple-400 transition-colors">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Like What You See?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These are just a few examples of my work. I'm always working on new projects and exploring cutting-edge
            technologies. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Start a Project
            </Button>
            <Button size="lg" variant="outline">
              View More on GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
