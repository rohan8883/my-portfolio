"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Portfolio
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">
            Skills
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

