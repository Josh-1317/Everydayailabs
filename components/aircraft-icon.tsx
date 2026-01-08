"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface AircraftIconProps {
  className?: string
}

export function AircraftIcon({ className = "w-16 h-16" }: AircraftIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {/* Aircraft body */}
      <motion.path
        d="M70 50 L30 50 L35 45 L65 45 Z"
        stroke="white"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Left wing with intentional break */}
      <motion.path
        d="M40 50 L20 65"
        stroke="white"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Gap representation - heals on hover */}
      <motion.circle
        cx="40"
        cy="50"
        r={isHovered ? 0 : 2}
        fill="white"
        animate={{
          r: isHovered ? 0 : 2,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Healing connection line */}
      {isHovered && (
        <motion.path
          d="M40 50 L35 55"
          stroke="white"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Right wing */}
      <motion.path
        d="M60 50 L80 65"
        stroke="white"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />

      {/* Tail */}
      <motion.path
        d="M30 50 L25 40 M30 50 L25 60"
        stroke="white"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />

      {/* Hover glow effect */}
      {isHovered && (
        <motion.circle
          cx="40"
          cy="50"
          r="8"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.svg>
  )
}
