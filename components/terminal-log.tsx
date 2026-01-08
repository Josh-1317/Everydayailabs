"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const logs = [
  "> scanning_operations...",
  "> analyzing_workflow...",
  "> detecting_friction_points...",
  "> gap_identified: reporting_lag",
  "> initializing_fix...",
  "> deploying_solution...",
  "> status: stable",
  "> implementation_status: active",
]

export function TerminalLog() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < logs.length) {
      const timer = setTimeout(() => {
        setVisibleLogs((prev) => [...prev, logs[currentIndex]])
        setCurrentIndex((prev) => prev + 1)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <div className="h-full flex flex-col">
      <div className="font-mono text-xs text-white/40 mb-4 lowercase">system monitor</div>
      <div className="flex-1 font-mono text-sm space-y-2 overflow-hidden">
        <AnimatePresence>
          {visibleLogs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${log.includes("stable") || log.includes("active") ? "text-white" : "text-white/60"}`}
            >
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
        {currentIndex < logs.length && (
          <motion.span
            className="inline-block w-2 h-4 bg-white ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
      </div>
    </div>
  )
}
