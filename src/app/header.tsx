"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-inherit/80 dark:bg-gray-800/80 backdrop-blur-sm border-b dark:border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between space-x-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold">N</span>
        </div>
        <Link href="/">
        <span className="font-semibold text-black">NARASA</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-600 hover:text-yellow-500 transition-colors">Home</Link>
        <a href="#about" className="text-gray-600 hover:text-yellow-500 transition-colors">
        About
        </a>
        <a href="#services" className="text-gray-600 hover:text-yellow-500 transition-colors">
        Services
        </a>
        <a href="#skills" className="text-gray-600 hover:text-yellow-500 transition-colors">
        Skills
        </a>
        <a href="#projects" className="text-gray-600 hover:text-yellow-500 transition-colors">
        Projects
        </a>
        <a href="#contact" className="text-gray-600 hover:text-yellow-500 transition-colors">
        Contact
        </a>
      </div>
      <Link href="/Narasacv.pdf" 
                    download="Narasacv.pdf"
                    className="inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
      <Button className="hidden md:block bg-black text-white hover:bg-yellow-500">Download CV</Button>
      </Link>
      {/* Mobile Menu Button */}
      <Button className="md:hidden lg:hidden bg-inherit text-black hover:text-yellow-500"  onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </Button>
      </nav>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="top">
          <SheetTitle></SheetTitle>
          <nav className="flex md:hidden lg:hidden flex-col space-y-4 p-6 bg-inherit">
          <Link
          href="/" 
          className="text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >Home</Link>
        <a 
          href="#about" 
          className="text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a 
          href="#services" 
          className="text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Services
        </a>
        <a 
          href="#skills" 
          className="text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </a>
        <a 
          href="#projects" 
          className="text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className="text-white hover:text-yellow-500 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        <Link href="/Narasacv.pdf" 
                    download="Narasacv.pdf"
                    className="inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
        <Button 
          className=" bg-black text-white hover:bg-yellow-500"
          onClick={() => setIsOpen(false)}
        >
          Download CV
        </Button>
        </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
