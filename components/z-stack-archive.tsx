"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const memos = [
  {
    title: "memo_001",
    content: "most ai projects fail not from technology, but from implementation gaps between vision and execution.",
    date: "2024.01.08",
  },
  {
    title: "memo_002",
    content: "the best system is the one that actually ships. perfection is the enemy of deployment.",
    date: "2024.01.15",
  },
  {
    title: "memo_003",
    content: "we don't build ai for the sake of ai. we build systems that solve real operational friction.",
    date: "2024.02.03",
  },
  {
    title: "memo_004",
    content: "speed of implementation > sophistication of solution. fast iteration beats slow perfection.",
    date: "2024.02.20",
  },
]

export function ZStackArchive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={containerRef} className="relative py-32 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-light mb-16 lowercase text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          observations
        </motion.h2>

        <div className="relative h-[800px] flex items-center justify-center">
          {memos.map((memo, index) => {
            const targetScale = 1 - (memos.length - index - 1) * 0.05
            const targetOpacity = 1 - (memos.length - index - 1) * 0.2

            return (
              <MemoCard
                key={index}
                memo={memo}
                index={index}
                total={memos.length}
                scrollProgress={scrollYProgress}
                targetScale={targetScale}
                targetOpacity={targetOpacity}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MemoCard({
  memo,
  index,
  total,
  scrollProgress,
  targetScale,
  targetOpacity,
}: {
  memo: any
  index: number
  total: number
  scrollProgress: any
  targetScale: number
  targetOpacity: number
}) {
  const start = index / total
  const end = (index + 1) / total

  const scale = useTransform(scrollProgress, [start, end], [targetScale, 1.2])
  const opacity = useTransform(scrollProgress, [start, end], [targetOpacity, 0])
  const y = useTransform(scrollProgress, [start, end], [0, -100])

  return (
    <motion.div
      className="absolute w-full max-w-2xl border border-white/20 bg-black p-12"
      style={{
        scale,
        opacity: index === total - 1 ? 1 : opacity,
        y,
        zIndex: total - index,
      }}
    >
      <div className="font-mono text-xs text-white/40 mb-6 lowercase flex justify-between">
        <span>{memo.title}</span>
        <span>{memo.date}</span>
      </div>
      <p className="text-xl md:text-2xl font-light leading-relaxed lowercase">{memo.content}</p>
    </motion.div>
  )
}
