"use client"

import AnimatedBackground from "@/components/animated-background"
import { fadeInUp, staggerContainer } from "@/components/lib/utils"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import AboutSection from "./about-section"
import ContactSection from "./contact-section"
import Footer from "./footer"
import Header from "./header"
import ProjectsSection from "./projects-section"
import ServicesSection from "./services-section"
import SkillsSection from "./skills-section"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section with AnimatedBackground */}
      <section id="hero-section" className="relative min-h-screen flex items-center justify-center pt-20 pb-8 overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center h-full text-center"
          >
            <motion.div variants={fadeInUp} className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mb-6 sm:mb-8">
              <div className="absolute inset-0 rounded-full border-sky-500 border-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/narasa-removebg-preview-JeaAWtHjFedx3fkOmH6Fkjo0zupoEv.png"
                  alt="Profile"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              {/* Decorative wave emoji */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 flex items-center justify-center" aria-label="Waving hand emoji">
                <span className="text-2xl sm:text-3xl md:text-5xl">👋</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-2xl px-4">
              <span className="text-yellow-600 font-semibold text-sm sm:text-base">Hello, I&apos;m</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-sky-500 pt-2 sm:pt-4 font-bold mb-2 sm:mb-4">NARASA RAJ</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">Designer</p>

              <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary hover:text-sky-500"
                >
                  <a href="mailto:Pediredlanarasaraju@gmail.com" className="text-gray-600 hover:text-red-500 transition-colors">
                    <span className="sr-only">Email</span>
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary hover:text-sky-500"
                >
                  <a href="https://github.com/imnarasa" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary hover:text-sky-500"
                >
                  <a href="https://www.linkedin.com/in/pediredla-narasaraju-ab6469304" className="text-gray-600 hover:text-blue-500 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin size={20} className="sm:w-6 sm:h-6" />
                  </a>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="#projects" className="px-4 sm:px-6 py-2.5 sm:py-3 bg-sky-500 rounded-full text-sm sm:text-base hover:bg-transparent hover:text-black transition-colors">
                  View Projects
                </a>
                <a href="#contact" className="px-4 sm:px-10 py-2.5 sm:py-3 bg-black text-white rounded-full text-sm sm:text-base hover:bg-yellow-600 transition-colors">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:flex"
            >
              <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-black">
              <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Other Sections */}
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
