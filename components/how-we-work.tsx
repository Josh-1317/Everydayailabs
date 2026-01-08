"use client"

import { motion } from "framer-motion"

export function HowWeWork() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-white/40 uppercase tracking-wider">how we work</h2>
            <p className="text-3xl md:text-5xl font-light lowercase">we don't consult. we embed and ship.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-light text-white/20">01</div>
              <h3 className="text-xl font-light lowercase">assess</h3>
              <p className="text-white/60 font-mono text-sm">
                we audit your existing ai attempts, map execution gaps, identify deployment blockers.
              </p>
              <div className="pt-4 space-y-1 text-white/40 font-mono text-xs">
                <p>→ infrastructure review</p>
                <p>→ workflow analysis</p>
                <p>→ risk mapping</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-light text-white/20">02</div>
              <h3 className="text-xl font-light lowercase">architect</h3>
              <p className="text-white/60 font-mono text-sm">
                we design implementation systems that fit your environment, not generic frameworks.
              </p>
              <div className="pt-4 space-y-1 text-white/40 font-mono text-xs">
                <p>→ deployment patterns</p>
                <p>→ integration design</p>
                <p>→ scalability model</p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-light text-white/20">03</div>
              <h3 className="text-xl font-light lowercase">ship</h3>
              <p className="text-white/60 font-mono text-sm">
                we build, deploy, and transfer to your team. production ready. documented. repeatable.
              </p>
              <div className="pt-4 space-y-1 text-white/40 font-mono text-xs">
                <p>→ live deployment</p>
                <p>→ knowledge transfer</p>
                <p>→ runbook delivery</p>
              </div>
            </motion.div>
          </div>

          <div className="pt-12 border-t border-white/10">
            <p className="text-xl text-white/70 font-mono lowercase">timeline: 8-12 weeks to first production system</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
