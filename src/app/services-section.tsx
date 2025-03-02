'use client'

import { fadeInUp, staggerContainer } from "@/components/lib/utils"
import { motion } from "framer-motion"
import { Apple, Camera, Chrome, Instagram, Radio, Video } from 'lucide-react'

const services = [
  {
    icon: <Chrome className="w-8 h-8" />,
    title: "Web Development",
    description: "Building dynamic, responsive, and efficient web solutions with a focus on performance and user experience."
  },
  {
    icon: <Instagram className="w-8 h-8" />,
    title: "Web Design",
    description: "Crafting visually stunning and user-friendly designs that enhance digital experiences."
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Creative Design",
    description: "Transforming ideas into vibrant, compelling designs that spark creativity and inspire engagement."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Editing",
    description: "Transforming raw footage into captivating visual stories with seamless edits and dynamic effects."
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Capturing moments with creativity and precision to tell compelling visual stories."
  },
  {
    icon: <Apple className="w-8 h-8" />,
    title: "App Developing",
    description: "Building intuitive and high-performance apps that deliver seamless user experiences."
  }
]

const features = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gears-icon-QZZ4qxINmMBqZSpHfDVNAJsrGym4lv.svg",
    title: "Full Customization"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/users-group-verification-interface-symbol-svgrepo-com-WUZrZ9X7GgDgNvhp5QdwcXcyK2nHaY.svg",
    title: "User Friendly"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/responsive-svgrepo-com-dazxPmIIFJKgAUthK7eN5hPsUxsQ2N.svg",
    title: "Responsive Design"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/code-svgrepo-com-36nx2Nz0aXjKnbLWUFv3pOSozzLzrk.svg",
    title: "Developer Friendly Code"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-icon-branding-oneline-svgrepo-com-VLLRn4GRLFGoPJm4MHZYu67YlhPoql.svg",
    title: "Google Font"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/documentation-svgrepo-com-nmpzZpyuZbhwULKxUhvT8vQeO7bQnt.svg",
    title: "Well Documentation"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bootstrap-svgrepo-com-sne8ERYMg42cGGEur40cw57hSQX2WQ.svg",
    title: "Bootstrap 5"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-svgrepo-com-Idop7fKJWDTt8XwZ1VCK3vqZ2GfFYc.svg",
    title: "Clean & Modern Design"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative min-h-screen bg-gray-50 py-20">
        
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Services Section */}
          <div className="space-y-12">
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold text-center text-[#000]"
            >
              My Service
            </motion.h2>

            <div  className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="bg-zinc-900 rounded-lg p-6 transition-transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[#FFB800]">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-200">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Features Section */}
          <div  style={{paddingBottom:"5%" }} className="space-y-12">
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold text-center text-[#000]"
            >
              Core Features
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12">
                      <img 
                        src={feature.icon} 
                        alt={feature.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

