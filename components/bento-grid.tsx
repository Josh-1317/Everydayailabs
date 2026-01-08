"use client"

import { motion } from "framer-motion"
import { TerminalLog } from "./terminal-log"
import { SystemSchematic } from "./system-schematic"
import { XRayBox } from "./xray-box"

export function BentoGrid() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-light mb-16 lowercase text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          the architecture
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          <motion.div
            className="bg-black p-8 min-h-[400px] border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalLog />
          </motion.div>

          <motion.div
            className="bg-black p-8 min-h-[400px] border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SystemSchematic />
          </motion.div>

          <motion.div
            className="bg-black p-8 min-h-[400px] border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <XRayBox />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
