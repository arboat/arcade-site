"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"

export function HeaderButtons() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
    </div>
  )
}

