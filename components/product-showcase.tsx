"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Zap, GitBranch, Shield, Cpu } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "rapid prototyping",
    description: "working mvp in 2 weeks with your tech stack",
    details: ["claude/gpt integration", "custom ui/ux", "real-time testing"],
  },
  {
    icon: GitBranch,
    title: "production architecture",
    description: "scalable systems built for growth",
    details: ["microservices ready", "cloud-native deploy", "monitoring included"],
  },
  {
    icon: Shield,
    title: "security first",
    description: "enterprise-grade protection from day one",
    details: ["soc 2 compliance", "data encryption", "audit trails"],
  },
  {
    icon: Cpu,
    title: "ai optimization",
    description: "cost-efficient models without compromising quality",
    details: ["prompt engineering", "model selection", "token optimization"],
  },
]

export function ProductShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="relative py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light lowercase mb-6">how we build</h2>
          <p className="text-xl text-black/60 font-mono lowercase max-w-2xl mx-auto">
            every project follows a proven framework designed for speed and quality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative border border-black/10 p-8 hover:bg-black hover:text-white transition-all duration-500 group cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-12 h-12" strokeWidth={1} />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light lowercase mb-2">{feature.title}</h3>
                    <p className="text-sm font-mono mb-4 opacity-60">{feature.description}</p>
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredIndex === index ? "auto" : 0,
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden space-y-2"
                    >
                      {feature.details.map((detail, i) => (
                        <li key={i} className="text-xs font-mono flex items-center gap-2">
                          <span className="text-xs">→</span> {detail}
                        </li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
