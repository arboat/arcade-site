"use client"

import { ScrambleText } from "@/components/scramble-text"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const navigation = [
  {
    name: "Blog",
    href: "/blog",
    description: "Read my thoughts and experiences",
  },
  {
    name: "GitHub Analysis",
    href: "/github-analysis",
    description: "Analyze GitHub repositories and users",
  },
  {
    name: "Experimental Arcade",
    href: "/experimental-arcade",
    description: "Play with experimental web technologies",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="h-24 mb-8 flex justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-center"
          >
            <ScrambleText text="Welcome to My Space" delay={500} />
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="no-underline">
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-foreground">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

