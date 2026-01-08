"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { AnimatedGridBg } from "./animated-grid-bg"

export function Boundaries() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const goodForYou = [
    "you already have ai strategy or use cases defined",
    "you have engineering capacity but need execution patterns",
    "you've tried to deploy ai and hit blockers",
    "you need production systems, not research projects",
    "you're willing to embed us with your team",
  ]

  const notForYou = [
    "you need help deciding if ai is relevant",
    "you want a proof-of-concept without deployment",
    "you're looking for strategy consulting",
    "you need a research partner, not an implementation team",
    "you expect us to work in isolation",
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-white text-black overflow-hidden">
      <AnimatedGridBg />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-black/40 uppercase tracking-wider"
            >
              boundaries
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light lowercase text-black"
            >
              this is for you if
            </motion.p>
          </div>

          <div className="space-y-4">
            {goodForYou.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur border border-black/10 rounded-lg hover:border-green-500/50 hover:shadow-md transition-all group cursor-default"
              >
                <span className="text-green-600 text-2xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                <p className="text-lg text-black/80 font-mono group-hover:text-black transition-colors">{item}</p>
              </motion.div>
            ))}
          </div>

          <div className="pt-12 border-t border-black/10 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light lowercase text-black"
            >
              this is not for you if
            </motion.p>

            <div className="space-y-4 mt-8">
              {notForYou.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur border border-black/10 rounded-lg hover:border-red-500/50 hover:shadow-md transition-all group cursor-default"
                >
                  <span className="text-red-600 text-2xl mt-1 group-hover:scale-125 transition-transform">✗</span>
                  <p className="text-lg text-black/80 font-mono group-hover:text-black transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 p-6 bg-black/5 rounded-lg border-l-4 border-black"
          >
            <p className="text-black/80 font-mono text-sm leading-relaxed">
              this clarity saves time. if we're not the right fit, we'll tell you.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
