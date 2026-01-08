"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export function TerminalContact() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      console.log("[v0] Email submitted:", email)
      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="border border-white/20 p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-sm text-white/40 mb-8 lowercase">{">"} initiate_contact</div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="font-mono text-lg flex items-center gap-2">
                <span className="text-white/60">{">"} identify_your_gap:</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/20 lowercase"
                  required
                />
                <motion.span
                  className="inline-block w-2 h-5 bg-white"
                  animate={{ opacity: isFocused ? [1, 0] : 0 }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>

              <div className="h-[1px] bg-white/10" />

              <button
                type="submit"
                className="font-mono text-sm text-white/60 hover:text-white transition-colors lowercase"
              >
                {">"} enter to submit
              </button>
            </form>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-lg space-y-2">
              <div className="text-white">{">"} message_received</div>
              <div className="text-white/60">{">"} analyzing_gap...</div>
              <div className="text-white/60">{">"} response_incoming</div>
            </motion.div>
          )}

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="font-mono text-xs text-white/30 lowercase space-y-2">
              <div>everyday ai labs</div>
              <div>precision implementation systems</div>
              <div>est. 2024</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
