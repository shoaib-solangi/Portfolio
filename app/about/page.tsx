"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, Users, Coffee, Code2, Download } from "lucide-react"
import PageHeader from "../components/page-header"
import Breadcrumb from "../components/breadcumb"


export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Leading development of enterprise applications and mentoring junior developers.",
      skills: ["React", "Node.js", "AWS", "Team Leadership"],
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Agency Pro",
      description: "Developed 20+ client projects including e-commerce platforms and web applications.",
      skills: ["Next.js", "TypeScript", "MongoDB", "UI/UX"],
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "StartUp Hub",
      description: "Built responsive web applications and collaborated with design teams.",
      skills: ["React", "JavaScript", "CSS", "Figma"],
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "Code Academy",
      description: "Started my professional journey learning modern web technologies.",
      skills: ["HTML", "CSS", "JavaScript", "Git"],
    },
  ]

  const achievements = [
    { icon: Award, title: "50+ Projects", description: "Successfully delivered" },
    { icon: Users, title: "30+ Clients", description: "Happy customers worldwide" },
    { icon: Coffee, title: "1000+ Hours", description: "Of coding experience" },
    { icon: Code2, title: "15+ Technologies", description: "Mastered and counting" },
  ]

  const personalInfo = [
    { label: "Location", value: "Karachi, Pakistan", icon: MapPin },
    { label: "Experience", value: "5+ Years", icon: Calendar },
    { label: "Availability", value: "Open to work", icon: Users },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />
        <PageHeader
          title="About Me"
          description="I'm a passionate full-stack developer with a love for creating digital experiences that make a difference. Here's my story and what drives me every day."
          badge="Developer Story"
          showShare={true}
          views={1250}
        />
        {/* Personal Info & Photo */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400/20 to-pink-400/20">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ahmad Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <Code2 className="h-12 w-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Hello, I'm Ahmad Khan</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a full-stack developer based in Karachi, Pakistan, with over 5 years of experience in creating web
              applications that solve real-world problems. My journey started with a curiosity about how websites work,
              and it has evolved into a passion for crafting digital experiences that users love.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community. I believe in continuous learning and staying updated
              with the latest trends in web development.
            </p>

            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <info.icon className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">{info.label}:</span>
                  <span className="text-muted-foreground">{info.value}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Milestones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-purple-400 border-purple-400">
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <p className="text-purple-400 font-medium">{item.company}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
