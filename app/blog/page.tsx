"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, TrendingUp, MessageCircle, Share2 } from "lucide-react"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Web Development", "React", "Next.js", "UI/UX", "Career", "Tutorials"]

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Web Applications with Next.js 14",
      excerpt:
        "Explore the latest features in Next.js 14 and learn how to build performant, scalable web applications with the App Router.",
      content:
        "Next.js 14 introduces several groundbreaking features that revolutionize how we build web applications...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Next.js",
      author: "Ahmad Khan",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 2450,
      comments: 23,
      featured: true,
      tags: ["Next.js", "React", "Web Development", "JavaScript"],
    },
    {
      id: 2,
      title: "The Complete Guide to React Server Components",
      excerpt:
        "Understanding React Server Components and how they're changing the way we think about React applications.",
      content: "React Server Components represent a paradigm shift in how we build React applications...",
      image: "/placeholder.svg?height=300&width=500",
      category: "React",
      author: "Ahmad Khan",
      date: "2024-01-08",
      readTime: "12 min read",
      views: 1890,
      comments: 31,
      featured: true,
      tags: ["React", "Server Components", "Performance", "Architecture"],
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox in 2024",
      excerpt: "A comprehensive guide to modern CSS layout techniques that every developer should know.",
      content: "CSS Grid and Flexbox are powerful layout systems that have revolutionized web design...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
      author: "Ahmad Khan",
      date: "2024-01-01",
      readTime: "10 min read",
      views: 1650,
      comments: 18,
      featured: false,
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Design"],
    },
    {
      id: 4,
      title: "Building Accessible Web Applications",
      excerpt:
        "Learn how to create inclusive web experiences that work for everyone, including users with disabilities.",
      content: "Web accessibility is not just a nice-to-have feature; it's a fundamental requirement...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Web Development",
      author: "Ahmad Khan",
      date: "2023-12-20",
      readTime: "15 min read",
      views: 1320,
      comments: 27,
      featured: false,
      tags: ["Accessibility", "WCAG", "Inclusive Design", "UX"],
    },
    {
      id: 5,
      title: "My Journey from Junior to Senior Developer",
      excerpt: "Lessons learned and advice for developers looking to advance their careers in tech.",
      content: "The journey from junior to senior developer is filled with challenges and learning opportunities...",
      image: "/placeholder.svg?height=300&width=500",
      category: "Career",
      author: "Ahmad Khan",
      date: "2023-12-10",
      readTime: "7 min read",
      views: 2100,
      comments: 45,
      featured: true,
      tags: ["Career", "Growth", "Advice", "Experience"],
    },
    {
      id: 6,
      title: "Advanced TypeScript Patterns for React",
      excerpt: "Explore advanced TypeScript patterns that will make your React code more robust and maintainable.",
      content: "TypeScript has become an essential tool for React developers...",
      image: "/placeholder.svg?height=300&width=500",
      category: "React",
      author: "Ahmad Khan",
      date: "2023-11-25",
      readTime: "11 min read",
      views: 1750,
      comments: 22,
      featured: false,
      tags: ["TypeScript", "React", "Patterns", "Best Practices"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

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
            My Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing my thoughts, experiences, and knowledge about web development, technology, and the ever-evolving
            world of software engineering.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <TrendingUp className="h-6 w-6 mr-3 text-purple-400" />
            Featured Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/25">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white">Featured</Badge>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-purple-400 border-purple-400">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-purple-600 transition-colors">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
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
        </motion.div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <BookOpen className="h-6 w-6 mr-3 text-purple-400" />
            All Articles ({filteredPosts.length})
          </h2>

          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative overflow-hidden h-48 md:h-full">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {post.featured && (
                          <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white">Featured</Badge>
                        )}
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-purple-400 border-purple-400">
                          {post.category}
                        </Badge>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                          <Calendar className="h-4 w-4 ml-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
            </motion.div>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest articles, tutorials, and insights delivered straight to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No spam, unsubscribe at any time.</p>
        </motion.div>
      </div>
    </div>
  )
}
