"use client"

import { motion, useScroll } from "framer-motion"
import { useRef, useState } from "react"
import { AnimatedGridBg } from "./animated-grid-bg"

export function StructuredOfferings() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const offerings = [
    {
      title: "rapid deployment system",
      duration: "8 weeks",
      description:
        "for companies with defined ai use cases stuck in pilot hell. we build production-ready deployment infrastructure.",
      includes: ["deployment architecture", "integration framework", "monitoring system"],
      outcome: ["working ai feature in production", "repeatable deployment pattern"],
      for: ["mid-size tech companies", "established startups"],
      price: "$120k",
    },
    {
      title: "enterprise ai pipeline",
      duration: "12 weeks",
      description: "for large organizations needing systematic ai deployment across multiple teams and use cases.",
      includes: ["multi-environment architecture", "governance framework", "team enablement system"],
      outcome: ["scalable ai infrastructure", "internal deployment capability"],
      for: ["enterprise companies", "regulated industries"],
      price: "$240k",
    },
    {
      title: "implementation audit",
      duration: "2 weeks",
      description:
        "for companies that need clarity before commitment. we diagnose why ai isn't shipping and map the fix.",
      includes: ["technical audit", "process review", "gap analysis"],
      outcome: ["execution roadmap", "risk assessment"],
      for: ["companies exploring options", "stuck ai initiatives"],
      price: "$25k",
    },
  ]

  return (
    <section ref={sectionRef} className="relative py-32 px-4 bg-white border-t border-black/10 overflow-hidden">
      <AnimatedGridBg />

      <div className="max-w-6xl mx-auto relative z-10">
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
              solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light lowercase text-black"
            >
              three systems. one goal.
            </motion.p>
          </div>

          <div className="space-y-8">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                className="relative border border-black/20 p-8 hover:border-black/60 transition-all bg-white/50 backdrop-blur-sm rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-black"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <h3 className="text-2xl font-light lowercase text-black">{offering.title}</h3>
                  <div className="flex gap-4 items-center">
                    <span className="text-black/40 font-mono text-sm">{offering.duration}</span>
                    <motion.span
                      className="text-black font-mono text-lg font-medium px-3 py-1 bg-black/5 rounded"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                    >
                      {offering.price}
                    </motion.span>
                  </div>
                </div>

                <p className="text-black/60 font-mono text-sm mb-6">{offering.description}</p>

                <div className="grid md:grid-cols-3 gap-6 text-sm font-mono">
                  <div>
                    <p className="text-black mb-3 font-medium uppercase text-xs tracking-wider">includes</p>
                    <div className="space-y-1">
                      {offering.includes.map((item, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="text-black/70"
                        >
                          • {item}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-black mb-3 font-medium uppercase text-xs tracking-wider">outcome</p>
                    <div className="space-y-1">
                      {offering.outcome.map((item, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="text-black/70"
                        >
                          • {item}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-black mb-3 font-medium uppercase text-xs tracking-wider">best for</p>
                    <div className="space-y-1">
                      {offering.for.map((item, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="text-black/70"
                        >
                          • {item}
                        </motion.p>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-2 bg-black text-white font-mono text-xs uppercase tracking-wider rounded hover:bg-black/80 transition-colors"
                >
                  learn more →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
