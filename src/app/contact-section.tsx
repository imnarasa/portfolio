"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
  success: {
    backgroundColor: "#4CAF50",
    transition: { duration: 0.3 },
  },
  error: {
    backgroundColor: "#f44336",
    transition: { duration: 0.3 },
  },
}

export default function ContactSection() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsError(false)
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        // Reset form after successful submission
        setFormState({
          fullName: "",
          email: "",
          message: "",
        })
        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        setIsError(true)
        // Display the specific error message from the API if available
        setErrorMessage(result.error || "Failed to send message. Please try again.")
        console.error("Form submission error:", result)
        setTimeout(() => setIsError(false), 5000)
      }
    } catch (error) {
      console.error("Form submission exception:", error)
      setIsError(true)
      setErrorMessage("Network error. Please check your connection and try again.")
      setTimeout(() => setIsError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const getButtonText = () => {
    if (isSubmitting) return "Sending..."
    if (isSuccess) return "Message Sent!"
    if (isError) return "Try Again"
    return "Send Message"
  }

  const getButtonState = () => {
    if (isSuccess) return "success"
    if (isError) return "error"
    return "initial"
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          style={{ paddingBottom: "7.5%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold text-center text-[#000]"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
            C
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
            o
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}>
            n
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}>
            t
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}>
            a
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
            c
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}>
            t
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}>
            &nbsp;
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }}>
            M
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.6 }}>
            e
          </motion.span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">If Not Now, When?</h2>
              <h3 className="text-3xl font-bold text-gray-900">Let&apos;s Work Together!</h3>
            </div>
            <p className="text-gray-600 text-justify max-w-md">
            Let’s connect and bring ideas to life! Whether you have a project in mind, need creative solutions, or just want to discuss innovative possibilities, I’m always open to collaborations and new opportunities. Feel free to reach out, and let’s create something amazing together!
            </p>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                value={formState.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formState.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              />
            </motion.div>

            {isError && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
                {errorMessage}
              </motion.div>
            )}

            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={getButtonState()}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-full bg-[#FFB800] text-white hover:bg-black font-medium transition-all duration-200 disabled:opacity-70"
            >
              {getButtonText()}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

