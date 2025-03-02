import type React from "react"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

const Button: React.FC<ButtonProps> = ({ children, variant = "default", ...props }) => {
  return (
    <button
      className={`
        ${variant === "default" ? "bg-blue-500 text-white" : "border border-blue-500 text-blue-500"}
        py-2 px-4 rounded
      `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

