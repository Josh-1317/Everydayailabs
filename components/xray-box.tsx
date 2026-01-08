"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function XRayBox() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="h-full flex flex-col">
      <div className="font-mono text-xs text-white/40 mb-8 lowercase">x-ray analysis</div>

      <motion.div
        className="flex-1 border border-white/20 p-6 cursor-pointer relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
      >
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="problem"
              className="h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-light mb-2 lowercase">business problem</div>
                <div className="text-sm text-white/40 font-mono">hover to analyze</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="solution"
              className="h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="font-mono text-xs space-y-3">
                <div className="text-white/60">{">"} analyzing_layers...</div>
                <div className="pl-4 space-y-2">
                  <div className="text-white/80">→ surface: manual reporting</div>
                  <div className="text-white/80">→ core: data silos</div>
                  <div className="text-white/80">→ root: no automation</div>
                </div>
                <div className="text-white mt-4">{">"} solution: unified ai pipeline</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scan line effect */}
        {isHovered && (
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-white/50"
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
