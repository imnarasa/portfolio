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

export default function PrivacyPolicy() {
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
            Privacy Policy
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-6 text-gray-300">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
              <p>
                Welcome to NARASA&apos;s portfolio website. I respect your privacy and am committed to protecting any
                personal data you may share while using this website. This Privacy Policy explains how I collect, use,
                and safeguard your information.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">2. Information Collection</h2>
              <p>I may collect the following types of information when you visit my portfolio website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> If you contact me through the website, I may collect your name,
                  email address, and any other information you voluntarily provide.
                </li>
                <li>
                  <strong>Usage Data:</strong> I may collect information about how you interact with the website,
                  including pages visited, time spent on pages, and other browsing actions.
                </li>
                <li>
                  <strong>Technical Data:</strong> I may collect information about your device, browser type, IP
                  address, and operating system to optimize your experience and improve the website.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">3. Use of Information</h2>
              <p>The information I collect is used for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and communications</li>
                <li>To improve and optimize the website&apos;s performance and user experience</li>
                <li>To analyze usage patterns and trends</li>
                <li>To protect the security and integrity of the website</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">4. Cookies and Tracking Technologies</h2>
              <p>
                This website may use cookies and similar tracking technologies to enhance your browsing experience.
                Cookies are small files stored on your device that help websites remember your preferences and
                activities.
              </p>
              <p>
                You can configure your browser to refuse cookies or alert you when cookies are being sent. However, some
                parts of the website may not function properly if you disable cookies.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">5. Third-Party Services</h2>
              <p>
                This website may use third-party services such as analytics providers and hosting services. These third
                parties may collect information about your use of the website. Their use of your information is governed
                by their respective privacy policies.
              </p>
              <p>
                The website may also contain links to external websites. I am not responsible for the privacy practices
                or content of these external sites.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">6. Data Security</h2>
              <p>
                I implement reasonable security measures to protect your personal information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the Internet or
                electronic storage is 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access the personal information I hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to or restrict processing of your personal information</li>
              </ul>
              <p>To exercise these rights, please contact me using the information provided below.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">8. Changes to This Privacy Policy</h2>
              <p>
                I may update this Privacy Policy from time to time. The most current version will always be posted on
                this page with the effective date.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">9. Contact Information</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or my data practices, please contact me
                at Pediredlanarasaraju@gmail.com.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

