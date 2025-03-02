"use client"

import { fadeInUp, staggerContainer } from "@/components/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Facebook, Instagram, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-12 md:py-20 min-h-[100vh]">
      {/* Background with improved mobile styling */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-gray-50 md:skew-x md:translate-x" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-8 md:pt-0">
        {/* About Me heading at the top */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-8 md:mb-16"
        >
          <motion.h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
            ABOUT <span className="text-blue-600">ME</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center"
        >
          {/* Image - Optimized for all views */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full max-w-[280px] md:max-w-none aspect-square md:aspect-auto md:h-[600px] order-1 md:col-span-5"
          >
            <div className="absolute inset-0 bg-gray-500 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/port.jpg"
                alt="Profile Silhouette"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-50 hidden md:block" />
            </div>
          </motion.div>

          {/* Content - Improved desktop/tablet layout */}
          <motion.div
            variants={fadeInUp}
            className="space-y-4 md:space-y-6 order-2 md:col-span-7 text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl text-blue-500 font-medium">DESIGNER</h3>
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base md:pr-8">
              Myself Narasa Raj and am presently in my 3rd year of B.E./B.Tech at Sathyabama University in Chennai. I&apos;m passionate about Creation and Innovation, where Design meets Technology and the concept of Beauty meets the Culture of function. This kept my awareness as an industry personal, not too far from the graduation life, with a better knowledge of the works of design in modern times.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base md:pr-8">
              My start into design was given a new lift when I underwent an extensive course in a product development system named CREO; this particular system opened up the worlds of 3D modeling. The particular exposure gives me quite an edge, should I remain a concern for my complete development since blending my design with my development background would definitely be a true joining when searching for a digital approach in today&apos;s time.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base md:pr-8">
              Besides, my enthusiasm never fades. I expand my curiosity with zeal for unknowns from design and technology oppositions. I find great pleasure exploring different tools and methodologies in order to convert new ideas into reality.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 pt-2 md:pt-4">
              <a
                href="https://x.com/Narasaraj64?t=1rC16guLIBT33KO5aki7Dg&s=08"
                className="text-gray-500 hover:text-green-500 transition-colors p-2 rounded-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary hover:text-sky-500"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                  <span className="sr-only">Twitter</span>
                </motion.div>
              </a>
              <a
                href="https://www.instagram.com/narasaraj_2004?igsh=Mmpud3o2NGtvaWNy"
                className="text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary hover:text-sky-500"
                >
                  <Instagram size={20} className="md:w-6 md:h-6" />
                  <span className="sr-only">Instagram</span>
                </motion.div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076398130171&mibextid=ZbWKwL"
                className="text-gray-500 hover:text-blue-500 transition-colors p-2 rounded-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-primary hover:text-sky-500"
                >
                  <Facebook size={20} className="md:w-6 md:h-6" />
                  <span className="sr-only">Facebook</span>
                </motion.div>
              </a>
            </div>

            {/* Download CV Button */}
            <div className="pt-2 md:pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link href="/Narasacv.pdf" download="Narasacv.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="px-6 py-2 bg-yellow-500 hover:bg-black text-white rounded-full shadow-md">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile-only decorative elements */}
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 opacity-10 rounded-full md:hidden" />
      <div className="absolute top-12 right-4 w-16 h-16 bg-yellow-500 opacity-10 rounded-full md:hidden" />
    </section>
  )
}
