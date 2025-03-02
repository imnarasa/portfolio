"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const colors = ["#BAE6FD", "#FDE68A", "#DDD6FE"]
    const newShapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (60 - 20) + 20,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setShapes(newShapes)

    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsVisible(rect.bottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, Math.random() + 0.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground