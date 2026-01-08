"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

const metrics = [
  { label: "projects shipped", start: 0, end: 47, suffix: "" },
  { label: "avg time to production", start: 0, end: 8, suffix: " weeks" },
  { label: "client satisfaction", start: 0, end: 98, suffix: "%" },
  { label: "implementations completed", start: 0, end: 156, suffix: "" },
]

function AnimatedMetric({
  label,
  start,
  end,
  suffix,
  delay,
}: {
  label: string
  start: number
  end: number
  suffix: string
  delay: number
}) {
  const count = useMotionValue(start)
  const rounded = useSpring(count, { damping: 50, stiffness: 100 })

  useEffect(() => {
    const timer = setTimeout(() => {
      count.set(end)
    }, delay)
    return () => clearTimeout(timer)
  }, [count, end, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      viewport={{ once: true }}
      className="border border-white/10 p-8 hover:border-white/30 transition-colors"
    >
      <div className="flex items-baseline gap-1 mb-2">
        <motion.span className="text-5xl md:text-6xl font-light">{rounded.get().toFixed(0)}</motion.span>
        <span className="text-2xl text-white/60">{suffix}</span>
      </div>
      <p className="text-white/60 lowercase font-mono text-xs">{label}</p>
    </motion.div>
  )
}

export function LiveMetrics() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-light lowercase mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          by the numbers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={metric.label} {...metric} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  )
}
