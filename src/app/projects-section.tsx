'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Library Management System",
    category: "Web App Development",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YmZahE0ZVQfOMDD2cRwEyL1nGdz8dO.png",
    alt: "Library Management System Illustration"
  },
  {
    title: "Weather Forecasting App",
    category: "Web App Development",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YmZahE0ZVQfOMDD2cRwEyL1nGdz8dO.png",
    alt: "Weather Forecasting App Blueprint"
  },
  {
    title: "Dog's Breed Classification",
    category: "Machine Learning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YmZahE0ZVQfOMDD2cRwEyL1nGdz8dO.png",
    alt: "Dog Breed Classification Photo"
  },
  {
    title: "Boston House Price Prediction",
    category: "Machine Learning",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YmZahE0ZVQfOMDD2cRwEyL1nGdz8dO.png",
    alt: "House Price Prediction Illustration"
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
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

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
        {/* Background split */}
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center space-y-2">
            <motion.h2 
              variants={cardVariants}
              className="text-5xl font-bold text-black"
            >
              My Projects
            </motion.h2>
            <motion.p 
              variants={cardVariants}
              className="text-[#FFB800]"
            >
              Some Of My Distinguished Works
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-lg bg-gray-900"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <span className="text-sm text-[#FFB800]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-6 py-2 bg-[#FFB800] text-white rounded-full transform -translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      View Project
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}          </div>
        </motion.div>
      </div>
    </section>
  )
}

