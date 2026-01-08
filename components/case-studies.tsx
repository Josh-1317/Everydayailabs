"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const cases = [
  {
    id: "01",
    client: "fintech unicorn",
    challenge: "ai vision, zero production",
    solution: "shipped ml pipeline in 8 weeks",
    impact: "500k predictions/day",
    tech: ["pytorch", "kubernetes", "fastapi"],
  },
  {
    id: "02",
    client: "healthcare platform",
    challenge: "legacy systems blocking innovation",
    solution: "modern data architecture + ai layer",
    impact: "10x faster insights",
    tech: ["langchain", "postgres", "react"],
  },
  {
    id: "03",
    client: "logistics company",
    challenge: "manual routing, high costs",
    solution: "real-time optimization engine",
    impact: "30% cost reduction",
    tech: ["tensorflow", "graphql", "redis"],
  },
  {
    id: "04",
    client: "retail enterprise",
    challenge: "abandoned ai prototypes",
    solution: "production-ready recommendation system",
    impact: "15% conversion lift",
    tech: ["scikit-learn", "airflow", "nextjs"],
  },
]

export function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light lowercase mb-4">case studies</h2>
          <p className="text-white/60 lowercase font-mono text-sm">proof in production</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {cases.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-black border border-white/10 p-8 hover:bg-white/5 transition-colors duration-500 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-white/40 font-mono text-xs">{study.id}</span>
                <motion.div
                  className="w-2 h-2 bg-white"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <h3 className="text-2xl lowercase mb-3 group-hover:text-white/90 transition-colors">{study.client}</h3>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-white/40 font-mono text-xs uppercase">challenge</span>
                  <p className="text-white/80 lowercase mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-white/40 font-mono text-xs uppercase">solution</span>
                  <p className="text-white/80 lowercase mt-1">{study.solution}</p>
                </div>
                <div>
                  <span className="text-white/40 font-mono text-xs uppercase">impact</span>
                  <p className="text-white lowercase font-bold mt-1">{study.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 border border-white/20 lowercase group-hover:border-white/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
