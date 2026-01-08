"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const phases = [
  {
    phase: "week 1-2",
    title: "assess",
    activities: [
      "technical audit of existing systems",
      "stakeholder interviews",
      "infrastructure review",
      "identify bottlenecks",
    ],
    deliverable: "gap analysis report",
  },
  {
    phase: "week 3-4",
    title: "architect",
    activities: [
      "design production-ready system",
      "select optimal tech stack",
      "define data pipelines",
      "plan deployment strategy",
    ],
    deliverable: "technical specification",
  },
  {
    phase: "week 5-8",
    title: "build",
    activities: [
      "develop core ai/ml components",
      "integrate with existing systems",
      "implement monitoring & logging",
      "optimize for scale",
    ],
    deliverable: "working system",
  },
  {
    phase: "week 9-10",
    title: "ship",
    activities: ["production deployment", "performance validation", "team training", "knowledge transfer"],
    deliverable: "live in production",
  },
]

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-32 px-4">
      <motion.div style={{ opacity }} className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-light lowercase mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          10-week process
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/20" />

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative pl-16 md:pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-8 top-2 w-4 h-4 border-2 border-white bg-black"
                  whileInView={{ scale: [1, 1.5, 1] }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                />

                <div className="border border-white/10 p-8 hover:border-white/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <h3 className="text-3xl lowercase font-light mb-2 md:mb-0">{phase.title}</h3>
                    <span className="text-white/40 font-mono text-xs uppercase">{phase.phase}</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="text-white/70 lowercase text-sm flex items-start gap-2">
                        <span className="w-1 h-1 bg-white/50 mt-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-white/40 font-mono text-xs uppercase">deliverable</span>
                    <p className="text-white lowercase font-bold mt-1">{phase.deliverable}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
