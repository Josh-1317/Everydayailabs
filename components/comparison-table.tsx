"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

const comparisons = [
  { feature: "time to production", us: "10 weeks", others: "6-12 months" },
  { feature: "custom architecture", us: true, others: false },
  { feature: "source code ownership", us: true, others: false },
  { feature: "ongoing support", us: "included", others: "extra cost" },
  { feature: "scalability built-in", us: true, others: "maybe" },
  { feature: "ai model flexibility", us: "any provider", others: "locked in" },
]

export function ComparisonTable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light lowercase mb-6">why choose us</h2>
          <p className="text-xl text-black/60 font-mono lowercase">
            not all ai implementation partners are built the same
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-black/10"
        >
          <div className="grid grid-cols-3 border-b border-black/10 bg-black text-white">
            <div className="p-6 font-mono text-sm lowercase"></div>
            <div className="p-6 font-mono text-sm lowercase border-l border-white/10 text-center">everyday ai labs</div>
            <div className="p-6 font-mono text-sm lowercase border-l border-white/10 text-center opacity-60">
              others
            </div>
          </div>

          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-3 border-b border-black/10 last:border-b-0 hover:bg-black/5 transition-colors"
            >
              <div className="p-6 font-mono text-sm lowercase">{item.feature}</div>
              <div className="p-6 border-l border-black/10 text-center">
                {typeof item.us === "boolean" ? (
                  item.us ? (
                    <Check className="w-5 h-5 mx-auto" strokeWidth={2} />
                  ) : (
                    <X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} />
                  )
                ) : (
                  <span className="font-mono text-sm font-semibold">{item.us}</span>
                )}
              </div>
              <div className="p-6 border-l border-black/10 text-center opacity-60">
                {typeof item.others === "boolean" ? (
                  item.others ? (
                    <Check className="w-5 h-5 mx-auto" strokeWidth={2} />
                  ) : (
                    <X className="w-5 h-5 mx-auto opacity-30" strokeWidth={2} />
                  )
                ) : (
                  <span className="font-mono text-sm">{item.others}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
