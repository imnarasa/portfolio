'use client'

import { cn } from "@/components/lib/utils"
import { motion } from "framer-motion"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-colors",
          variant === 'default' && "bg-white text-black hover:bg-gray-100",
          variant === 'outline' && "border border-white text-white hover:bg-white/10",
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.button>
    )
  })
Button.displayName = "Button"

export { Button }

