"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AnimatedGridBg } from "./animated-grid-bg"

export function PointOfView() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-white text-black overflow-hidden">
      <AnimatedGridBg />

      <motion.div
        style={{ y }}
        className="absolute right-10 top-20 w-32 h-32 border-2 border-black/10 rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 60]) }}
        className="absolute left-10 bottom-20 w-24 h-24 border-2 border-black/10 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-mono text-black/40 uppercase tracking-wider"
          >
            our stance
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              className="p-8 bg-white/80 backdrop-blur border border-black/10 rounded-lg hover:border-black/30 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-2xl font-light lowercase mb-4 text-black">what we believe that others don't</p>
              <p className="text-lg text-black/70 font-mono leading-relaxed">
                ai implementation is not an engineering problem. it's a systems problem. you need deployment patterns,
                not more compute.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-white/80 backdrop-blur border border-black/10 rounded-lg hover:border-black/30 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-2xl font-light lowercase mb-4 text-black">what we refuse to do</p>
              <div className="space-y-3">
                {[
                  "no strategy decks without implementation",
                  "no demos that don't scale",
                  "no proprietary lock-in",
                  "no hype-driven architecture",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 text-black/70 font-mono text-sm group cursor-default"
                  >
                    <span className="text-black/30 group-hover:text-black transition-colors text-lg">→</span>
                    <span className="group-hover:text-black transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="p-8 bg-black text-white rounded-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <p className="text-2xl font-light lowercase mb-4">where we draw the line</p>
              <p className="text-lg text-white/80 font-mono leading-relaxed">
                we only work with companies that already know ai matters. we don't do proof-of-concepts. we build
                production systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
