"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type User = {
  name: string
  email: string
  image: string
}

type AuthContextType = {
  user: User | null
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("mockUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signIn = () => {
    const mockUser = {
      name: "John Doe",
      email: "john@example.com",
      image: "https://api.dicebear.com/6.x/avataaars/svg?seed=John",
    }
    setUser(mockUser)
    localStorage.setItem("mockUser", JSON.stringify(mockUser))
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("mockUser")
  }

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

