"use client"

import { motion } from "framer-motion"

export function CredibilitySignals() {
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
            <h2 className="text-sm font-mono text-white/40 uppercase tracking-wider">experience</h2>
            <p className="text-3xl md:text-5xl font-light lowercase">patterns we've solved</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-white font-mono text-sm">llm integration at scale</p>
                <p className="text-white/50 font-mono text-xs">
                  deployed production systems handling 2m+ daily requests
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-mono text-sm">real-time ai pipelines</p>
                <p className="text-white/50 font-mono text-xs">
                  built sub-second inference systems for live applications
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-mono text-sm">hybrid model deployment</p>
                <p className="text-white/50 font-mono text-xs">
                  architected cloud + edge ai for compliance-heavy industries
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-white font-mono text-sm">ai workflow automation</p>
                <p className="text-white/50 font-mono text-xs">
                  replaced manual processes with autonomous agent systems
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl font-light lowercase">types of companies we work with</p>
                <div className="space-y-1 text-white/60 font-mono text-sm">
                  <p>→ b2b saas platforms adding ai features</p>
                  <p>→ enterprises modernizing operations with ai</p>
                  <p>→ data-heavy companies building ai products</p>
                  <p>→ technical teams blocked on deployment</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2">
                <p className="text-white/70 font-mono text-sm">industries</p>
                <p className="text-white/40 font-mono text-xs">
                  fintech · healthcare · logistics · enterprise software · research platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
