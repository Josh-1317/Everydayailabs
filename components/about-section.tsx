"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="relative py-32 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-white/40 uppercase tracking-wider">about</h2>
            <p className="text-3xl md:text-5xl font-light lowercase">why we exist</p>
          </div>

          <div className="space-y-8 text-white/70 font-mono text-base">
            <p>
              in 2023, ai went from theoretical to mandatory. every company suddenly needed an ai strategy. most got
              one.
            </p>
            <p>but very few deployed anything real.</p>
            <p className="text-white">
              the problem wasn't vision. it wasn't technology. it wasn't budget. it was execution.
            </p>
            <p>
              ai implementation requires different patterns than traditional software. different deployment models.
              different risk considerations. different ways of thinking about production.
            </p>
            <p>
              consultants couldn't build it. agencies couldn't scale it. internal teams didn't have the patterns yet.
            </p>
            <p className="text-white">so we built a company that only does one thing: fix the implementation gap.</p>
          </div>

          <div className="pt-12 border-t border-white/10 space-y-6">
            <p className="text-xl font-light lowercase">how we think</p>
            <div className="space-y-4 text-white/60 font-mono text-sm">
              <p>
                → ai is not magic. it's infrastructure. treat it like infrastructure and it works. treat it like magic
                and it fails.
              </p>
              <p>
                → implementation beats innovation. a deployed 70% solution is infinitely more valuable than a perfect
                system stuck in staging.
              </p>
              <p>
                → systems thinking over feature thinking. we don't build isolated ai features. we build repeatable
                deployment patterns.
              </p>
              <p>
                → transfer over dependence. we embed, we ship, we transfer knowledge. the goal is your team running
                this, not us.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
