"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { AnimatedGridBg } from "./animated-grid-bg"

export function ProblemFrame() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-white border-t border-black/10 overflow-hidden">
      <AnimatedGridBg />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div style={{ opacity }} className="space-y-12">
          <motion.div
            style={{ y }}
            className="absolute -right-20 top-0 w-64 h-64 border border-black/5 rounded-full pointer-events-none"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
            className="absolute -left-10 bottom-0 w-48 h-48 border border-black/5 rounded-full pointer-events-none"
          />

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm font-mono text-black/40 uppercase tracking-wider"
            >
              the problem
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light lowercase leading-tight text-black"
            >
              organizations invest millions in ai roadmaps.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light lowercase leading-tight text-black/60"
            >
              then nothing ships.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "strategy exists", desc: "consultants deliver 200-page decks" },
              { title: "engineering is ready", desc: "infrastructure can handle it" },
              { title: "budget is approved", desc: "stakeholders are aligned" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-white border border-black/10 rounded-lg shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <p className="text-black font-mono text-sm mb-2">{item.title}</p>
                <p className="text-black/50 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-black/10"
          >
            <p className="text-xl text-black lowercase font-light">
              but between strategy and production, there's a gap.
            </p>
            <p className="mt-4 text-black/60 font-mono text-sm">
              no one owns execution. no one builds the bridge. ai stays theoretical.
            </p>
          </motion.div>

          <div className="space-y-4 pt-8">
            <h3 className="text-sm font-mono text-black/40 uppercase tracking-wider">why this keeps happening</h3>
            <div className="space-y-3">
              {[
                "consultants strategize but don't build",
                "agencies build demos but don't scale",
                "internal teams lack ai-specific execution patterns",
                "vendors sell tools but not implementation systems",
              ].map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-black/70 font-mono text-sm group cursor-default"
                >
                  <span className="text-black/30 group-hover:text-black transition-colors">→</span>
                  <span className="group-hover:text-black transition-colors">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
