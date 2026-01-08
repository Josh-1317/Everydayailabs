"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

export function EnhancedCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6 bg-white text-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-light lowercase mb-8 text-balance">
            ready to close your implementation gap?
          </h2>
          <p className="text-xl md:text-2xl text-black/60 font-mono lowercase mb-12 max-w-3xl mx-auto text-pretty">
            let's turn your ai strategy into production-ready systems. book a free 30-min strategy call.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-mono lowercase text-base flex items-center gap-3 hover:bg-black/90 transition-all group"
            >
              book strategy call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <p className="text-sm font-mono text-black/40 lowercase">no pressure, no pitch deck, just conversation</p>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-16 border-t border-black/10"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-light mb-2">10 weeks</p>
                <p className="text-sm font-mono text-black/60 lowercase">average time to production</p>
              </div>
              <div>
                <p className="text-4xl font-light mb-2">100%</p>
                <p className="text-sm font-mono text-black/60 lowercase">client satisfaction rate</p>
              </div>
              <div>
                <p className="text-4xl font-light mb-2">$2m+</p>
                <p className="text-sm font-mono text-black/60 lowercase">saved in implementation costs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
