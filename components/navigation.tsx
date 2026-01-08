"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.95)"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-40 h-10">
              <Image
                src="/images/horizontal.png"
                alt="everyday ai labs"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                unoptimized
              />
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-we-work"
              className="text-white/70 hover:text-white font-mono text-sm lowercase transition-colors duration-200"
            >
              how we work
            </a>
            <a
              href="#offerings"
              className="text-white/70 hover:text-white font-mono text-sm lowercase transition-colors duration-200"
            >
              solutions
            </a>
            <a
              href="#case-studies"
              className="text-white/70 hover:text-white font-mono text-sm lowercase transition-colors duration-200"
            >
              case studies
            </a>
            <a
              href="#about"
              className="text-white/70 hover:text-white font-mono text-sm lowercase transition-colors duration-200"
            >
              about
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-white/30 text-white font-mono lowercase text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              start project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
