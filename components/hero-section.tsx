"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { AircraftIcon } from "./aircraft-icon"

export function HeroSection() {
  const [scanComplete, setScanComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Kinetic Scan Line */}
      {!scanComplete && (
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-white z-50"
          initial={{ top: "-1px" }}
          animate={{ top: "100vh" }}
          transition={{
            duration: 2,
            ease: "linear",
          }}
        />
      )}

      {/* Content revealed by scan */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scanComplete ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <AircraftIcon className="w-24 h-24 mb-8" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-light tracking-tight lowercase max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            ship production ai in weeks, not years
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/80 font-mono lowercase tracking-wide max-w-3xl"
          >
            we close the implementation gap between ai strategy and live deployment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <button className="px-8 py-4 bg-white text-black font-mono lowercase text-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 border border-white">
              book strategy call
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-mono lowercase text-sm hover:bg-white/10 transition-all duration-300 hover:border-white">
              view case studies
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-white/40 font-mono"
          >
            <span>✓ 10-week deployment cycle</span>
            <span>✓ production-ready systems</span>
            <span>✓ zero vendor lock-in</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-sm text-white/40 font-mono"
          >
            <span className="inline-block animate-pulse">{">"}</span> scroll to explore
          </motion.div>
        </motion.div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </section>
  )
}
