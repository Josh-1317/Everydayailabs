"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const techCategories = [
  {
    category: "ai/ml",
    tools: ["pytorch", "tensorflow", "langchain", "hugging face", "openai", "anthropic"],
  },
  {
    category: "infrastructure",
    tools: ["kubernetes", "docker", "aws", "gcp", "terraform", "airflow"],
  },
  {
    category: "backend",
    tools: ["python", "fastapi", "node.js", "postgres", "redis", "graphql"],
  },
  {
    category: "frontend",
    tools: ["react", "next.js", "typescript", "tailwind", "framer motion"],
  },
]

export function TechStackInteractive() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light lowercase mb-4">tech stack</h2>
          <p className="text-white/60 lowercase font-mono text-sm">tools we use to ship</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveCategory(cat.category)}
              onMouseLeave={() => setActiveCategory(null)}
              className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ x: "-100%" }}
                animate={{
                  x: activeCategory === cat.category ? "0%" : "-100%",
                }}
                transition={{ duration: 0.3 }}
              />

              <h3 className="text-xl lowercase mb-6 font-mono relative z-10">{cat.category}</h3>

              <div className="space-y-2 relative z-10">
                {cat.tools.map((tool, i) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: activeCategory === cat.category ? 1 : 0.6,
                      x: activeCategory === cat.category ? 0 : -10,
                    }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className="text-sm lowercase text-white/70 group-hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-white/50" />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
