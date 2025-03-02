'use client'

import { fadeInUp, staggerContainer } from "@/components/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Menu } from 'lucide-react'
import Image from "next/image"
import { useEffect, useState } from "react"
import AboutSection from './about-section'
import ContactSection from './contact-section'
import Footer from './footer'
import ProjectsSection from './projects-section'
import ServicesSection from './services-section'
import SkillsSection from './skills-section'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading spinner
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background split */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-100">
        <div className="absolute inset-0 bg-black skew-x-12 translate-x-2/3" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-black">NARASA.</div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-[#FFB800] transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-[#FFB800] transition-colors">
              Services
            </a>
            <a href="#skills" className="text-white hover:text-[#FFB800] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-white hover:text-[#FFB800] transition-colors">
              Projects
            </a>
            <a href="#contact">
              <Button className="hover:bg-white bg-[#FFB800] text-black">CONTACT ME</Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column */}
            <motion.div style={{paddingBottom:"15%"}} variants={fadeInUp}>
              <h2 className="text-xl text-[#FFB800] mb-4">Hi, I am</h2>
              <h1 className="text-7xl font-bold text-gray-900 mb-4">NARASA RAJ</h1>
              <p className="text-xl text-gray-500 mb-8">Front-end Developer/UI Designer</p>
              <div className="flex space-x-4">
                <a href="mailto:Pediredlanarasaraju@gmail.com" className="text-neutral-500 hover:text-red-500 transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail size={18} />
                </a>
                <a href="https://github.com/imnarasa" className="text-neutral-500 hover:text-yellow-500 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/pediredla-narasaraju-ab6469304" className="text-neutral-500 hover:text-blue-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              style={{paddingTop:"0%", marginLeft:"0%"}}
              variants={fadeInUp}
              className="relative aspect-[3/4] md:aspect-auto md:h-[750px]"
            >
              <Image  
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/narasa-removebg-preview-JeaAWtHjFedx3fkOmH6Fkjo0zupoEv.png"
                alt="Profile"
                fill
                className="object-cover rounded-full"
                priority
              />
            </motion.div>
          </motion.div>
        </main>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Mobile Navigation Sheet */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <nav className="flex flex-col space-y-4">
            <a href="#about" className="text-white hover:text-[#FFB800] transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-[#FFB800] transition-colors">
              Services
            </a>
            <a href="#skills" className="text-white hover:text-[#FFB800] transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-white hover:text-[#FFB800] transition-colors">
              Projects
            </a>
            <a href="#contact">
              <Button>CONTACT ME</Button>
            </a>
          </nav>
        </Sheet>
        <Footer />
      </div>
    </div>
  )
}

