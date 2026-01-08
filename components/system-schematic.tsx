"use client"

import { motion } from "framer-motion"

export function SystemSchematic() {
  return (
    <div className="h-full flex flex-col">
      <div className="font-mono text-xs text-white/40 mb-8 lowercase">decision → action loop</div>

      <div className="flex-1 flex flex-col justify-center gap-8">
        <SchematicNode label="input" delay={0} />
        <SchematicArrow delay={0.2} />
        <SchematicNode label="process" delay={0.4} />
        <SchematicArrow delay={0.6} />
        <SchematicNode label="output" delay={0.8} />
        <SchematicArrow delay={1} />
        <SchematicNode label="feedback" delay={1.2} />
      </div>
    </div>
  )
}

function SchematicNode({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      className="border border-white/30 p-4 text-center font-mono text-sm lowercase"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: "rgba(255,255,255,0.8)" }}
    >
      {label}
    </motion.div>
  )
}

function SchematicArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      viewport={{ once: true }}
    >
      <svg width="2" height="20" viewBox="0 0 2 20">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="20"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay, duration: 0.5 }}
          viewport={{ once: true }}
        />
      </svg>
    </motion.div>
  )
}
