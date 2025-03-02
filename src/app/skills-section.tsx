'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fast-forward-svgrepo-com-JACQIAfIz0EODniK4a0k4xizvdEnFi.svg",
    title: "Fast Development",
    description: "Developing blazing fast web applications for seamless user interaction."
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mobile-svgrepo-com-6GAF34u9ph0CKNDD4oHUHCVksLBMKX.svg",
    title: "Responsive Design",
    description: "Mobile-first, responsive design layout for all devices is a top priority."
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/education-learning-22-svgrepo-com-RmeDqYKgdGBLJ1D1bJFCrMoHinnmzO.svg",
    title: "Continuous Learning",
    description: "Constantly continues to learn new technologies and keeping up-to-date with the freshest trends."
  }
]

const techLogos = [
  { name: "JavaScript", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JavaScript-6V7AUAhwNQ5R0NrgLDhuHbjfcoceXS.svg" },
  { name: "React", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/React-3pxQOe1cHoPPL5yIZYU39pHE3p8PVv.svg" },
  { name: "Next Js", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nextjs-WgLQs17XMNazFefumzo0WCMqvg2dF4.svg" },
  { name: "HTML5", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HTML-A5eWUwLFHVm2Mhk7fY3ep525YRUXAQ.svg" },
  { name: "Tailwind CSS", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tailwind_CSS-xe7XP6CBisVN9pYU2e3RpgYrrDxYhk.svg" },
  { name: "TypeScript", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Typescript-AzkCsxSr8qVe6HZM3UEZeBuCuGZMrf.svg" },
  { name: "Python", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Python-HZkzTYlmO4ws6OwIBrRJX7BffjGdP7.svg" },
  { name: "Java", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/java-BcxTpt7YWJHHW2iARjR6iPOE5D1UWE.svg" },
  { name: "Firebase", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/firebase-gbLzTf8uqzs0PHTPMXjgRK0bRkhBwL.svg" },
  { name: "MongoDB", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mongodb-LT6DHfu94SQnDsxEQcuZ7XzVNMEm9L.svg" }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
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

const logoVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Title */}
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-center mb-16 text-black"
          >
            SKILLS
          </motion.h2>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                custom={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-[#00F2DE] rounded-hexagon flex items-center justify-center mb-6">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">{skill.title}</h3>
                <p className="text-gray-800">{skill.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 md:grid-cols-5 gap-8"
          >
            {techLogos.map((tech) => (
              <motion.div
                key={tech.name}
                variants={logoVariants}
                whileHover="hover"
                className="flex items-center justify-center"
              >
                <Image
                  src={tech.src}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

