"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote:
      "they didn't just build our ai system—they made it production-ready from day one. no prototypes, no false starts.",
    author: "cto, series b fintech",
    metric: "8 weeks to production",
  },
  {
    quote:
      "finally, a team that understands both the ai and the engineering. they shipped what three other vendors couldn't.",
    author: "vp engineering, healthcare",
    metric: "3 failed vendors before them",
  },
  {
    quote: "the implementation gap is real. everyday ai labs closed it for us in ways we didn't think possible.",
    author: "founder, logistics startup",
    metric: "30% cost reduction",
  },
  {
    quote: "we had ai dreams collecting dust. they turned them into revenue-generating systems.",
    author: "head of data, retail",
    metric: "15% conversion lift",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-light lowercase mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          what clients say
        </motion.h2>

        <div className="relative min-h-[300px] border border-white/10 p-8 md:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <blockquote className="text-2xl md:text-3xl font-light lowercase leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>

              <div className="flex justify-between items-end pt-6 border-t border-white/10">
                <div>
                  <p className="text-white/60 lowercase font-mono text-sm">{testimonials[current].author}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold lowercase">{testimonials[current].metric}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-2 mt-8 justify-center">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} className="relative">
                <div className={`w-2 h-2 ${index === current ? "bg-white" : "bg-white/20"} transition-colors`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
