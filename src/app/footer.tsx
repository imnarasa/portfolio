'use client'

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/narasaraj_2004?igsh=Mmpud3o2NGtvaWNy", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pediredla-narasaraju-ab6469304", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/imnarasa", label: "GitHub" },
  { icon: Mail, href: "mailto:Pediredlanarasaraju@gmail.com", label: "Email" }
]

const informationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" }
]

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" }
]

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#0A0A0A] text-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-12">
          {/* Brand and Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">NARASARAJ</h2>
              <p className="text-sm text-gray-400">Chennai India (IND)</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.label}</span>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Information Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Information
            </h3>
            <ul className="space-y-2">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

