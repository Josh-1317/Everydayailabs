"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function FloatingStats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const stats = [
    { value: "8-12", label: "weeks to production", suffix: "" },
    { value: "100", label: "deployment success rate", suffix: "%" },
    { value: "15", label: "ai systems shipped", suffix: "+" },
    { value: "0", label: "pilot hell projects", suffix: "" },
  ]

  const y0 = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])
  const y1 = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])
  const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [70, 0, -70])
  const y3 = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80])
  const yTransforms = [y0, y1, y2, y3]

  return (
    <div ref={sectionRef} className="relative py-20 px-4 bg-white border-y border-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            return (
              <motion.div
                key={i}
                style={{ y: yTransforms[i] }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center p-6 bg-white/80 backdrop-blur border border-black/10 rounded-lg hover:border-black/30 hover:shadow-xl transition-all cursor-default"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-light text-black mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: i * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                  <span className="text-black/40">{stat.suffix}</span>
                </motion.div>
                <p className="text-sm font-mono text-black/60 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
