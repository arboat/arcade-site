"use client"

import { useEffect, useState } from "react"

interface ScrambleTextProps {
  text: string
  delay?: number
  className?: string
  textColor?: string
  backgroundColor?: string
  fontSize?: string
  fontWeight?: string | number
  padding?: string
  style?: React.CSSProperties
}

export function ScrambleText({ 
  text, 
  delay = 0, 
  className = "",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("")
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

  useEffect(() => {
    let iteration = 0
    let interval: NodeJS.Timeout

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(() => {
          const result = text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index]
              }
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join("")

          if (iteration >= text.length) {
            clearInterval(interval)
          }

          iteration += 1 / 3
          return result
        })
      }, 30)
    }

    const timeout = setTimeout(startAnimation, delay)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text, delay])

  return (
    <span 
      className={className}
    >
      {displayText}
    </span>
  )
}

