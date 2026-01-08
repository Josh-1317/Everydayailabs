"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "hi, i'm the everyday ai assistant. ask me anything about our services." },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const quickQuestions = [
    "what's your pricing?",
    "how long does implementation take?",
    "do you work with startups?",
    "what tech stack do you use?",
  ]

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""
      if (userMessage.toLowerCase().includes("pricing")) {
        response =
          "pricing starts at $50k for a 10-week implementation. this includes strategy, architecture, development, and deployment. want to discuss your specific needs?"
      } else if (userMessage.toLowerCase().includes("long")) {
        response =
          "typical timeline is 10 weeks from kickoff to production. we deliver an mvp in week 2, iterate through week 8, then deploy and optimize in weeks 9-10."
      } else if (userMessage.toLowerCase().includes("startup")) {
        response =
          "absolutely! we work with funded startups (seed+) looking to integrate ai into their core product. we understand the need for speed and budget consciousness."
      } else if (userMessage.toLowerCase().includes("tech")) {
        response =
          "we're tech-agnostic but typically use: next.js for frontend, python for ai/ml, postgres/mongodb for data, and deploy to vercel/aws. we adapt to your existing stack."
      } else {
        response =
          "great question! let me connect you with our team. click 'book strategy call' above or email hello@everydayailabs.com"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
    setTimeout(() => handleSend(), 100)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-white text-black p-4 border border-black hover:bg-black hover:text-white transition-all duration-300 shadow-2xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-96 h-[500px] bg-white border border-black shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 font-mono text-sm lowercase border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                ai assistant
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 font-mono text-xs lowercase ${
                      message.role === "user" ? "bg-black text-white" : "bg-black/5 text-black border border-black/10"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-black/5 text-black border border-black/10 p-3 font-mono text-xs">
                    <span className="inline-block animate-pulse">typing...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-black/10">
                <p className="font-mono text-xs lowercase mb-2 opacity-60">quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs font-mono lowercase border border-black/20 px-2 py-1 hover:bg-black hover:text-white transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-black/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="ask anything..."
                className="flex-1 bg-black/5 border border-black/10 px-3 py-2 text-sm font-mono lowercase focus:outline-none focus:border-black"
              />
              <button onClick={handleSend} className="bg-black text-white p-2 hover:bg-black/80 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
