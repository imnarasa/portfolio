"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function TermsAndConditions() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-yellow-500 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl font-bold mb-8">
            Terms & Conditions
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-6 text-gray-300">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p>
                Welcome to NARASA&apos;s portfolio website. These Terms and Conditions govern your use of this website. By
                accessing or using this website, you agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, audio clips,
                digital downloads, data compilations, and software, is the property of NARASA and is protected by
                international copyright laws.
              </p>
              <p>
                The content of this portfolio is for your personal and non-commercial use only. You may not modify,
                copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from,
                transfer, or sell any information or content obtained from this website without prior written consent.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Portfolio Projects</h2>
              <p>
                The projects displayed on this portfolio are for demonstration purposes only. They showcase my skills,
                abilities, and experience. Unless explicitly stated otherwise, I retain all rights to the projects,
                designs, and code samples presented.
              </p>
              <p>
                If you are interested in using or adapting any of the work displayed, please contact me directly to
                discuss licensing or collaboration opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. External Links</h2>
              <p>
                This website may contain links to external websites that are not provided or maintained by me. I do not
                guarantee the accuracy, relevance, timeliness, or completeness of any information on these external
                websites.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. User Conduct</h2>
              <p>When using this website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Use the website in any way that violates any applicable local, state, national, or international law
                  or regulation
                </li>
                <li>Attempt to interfere with the proper working of the website</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
                <li>
                  Use the website to transmit any material that is unlawful, harmful, threatening, abusive, harassing,
                  defamatory, or otherwise objectionable
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Disclaimer</h2>
              <p>
                This website and its content are provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind.
                I do not guarantee that the website will be error-free or uninterrupted.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact me at
                Pediredlanarasaraju@gmail.com.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

