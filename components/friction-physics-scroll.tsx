"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const chaosWords = ["chaos", "lag", "noise", "friction", "delay", "blocker", "confusion"]
const systemWords = ["precision", "speed", "clarity", "flow", "performance", "system", "control"]

export function FrictionPhysicsScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-light mb-16 lowercase text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          from chaos to system
        </motion.h2>

        <div className="relative h-[600px] flex items-center justify-center">
          {/* Chaotic state */}
          <div className="absolute inset-0 flex flex-wrap gap-8 items-center justify-center">
            {chaosWords.map((word, i) => (
              <ChaosWord key={`chaos-${i}`} word={word} index={i} scrollProgress={scrollYProgress} />
            ))}
          </div>

          {/* Organized state */}
          <motion.div
            className="relative z-10 w-full max-w-md"
            style={{
              opacity: useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
            }}
          >
            <div className="border border-white/20 p-8">
              <div className="font-mono text-sm text-white/40 mb-4">{">"} system_active</div>
              {systemWords.map((word, i) => (
                <motion.div
                  key={`system-${i}`}
                  className="text-2xl font-light py-2 border-b border-white/10 lowercase"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ChaosWord({ word, index, scrollProgress }: { word: string; index: number; scrollProgress: any }) {
  const x = useTransform(scrollProgress, [0, 0.5], [Math.random() * 200 - 100, 0])
  const y = useTransform(scrollProgress, [0, 0.5], [Math.random() * 200 - 100, 0])
  const opacity = useTransform(scrollProgress, [0, 0.3, 0.5], [1, 0.5, 0])
  const rotate = useTransform(scrollProgress, [0, 0.5], [Math.random() * 20 - 10, 0])

  return (
    <motion.span
      className="text-xl md:text-3xl font-light text-white/30 lowercase absolute"
      style={{
        x,
        y,
        opacity,
        rotate,
        left: `${20 + index * 12}%`,
        top: `${30 + (index % 3) * 20}%`,
      }}
    >
      {word}
    </motion.span>
  )
}
