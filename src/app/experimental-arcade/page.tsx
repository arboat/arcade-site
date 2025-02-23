"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ExperimentalArcade() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Experimental Arcade</h1>
      <p className="mb-4">Welcome to the Experimental Arcade! Move your mouse around to see some magic.</p>
      <div className="relative h-[400px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg overflow-hidden">
        <motion.div
          className="absolute w-10 h-10 bg-yellow-300 rounded-full"
          animate={{
            x: position.x - 20,
            y: position.y - 20,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
    </div>
  )
}

