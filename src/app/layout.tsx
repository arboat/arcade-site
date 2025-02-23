import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { HeaderButtons } from "@/components/header-buttons"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ClerkProvider } from "@clerk/nextjs"
import { UserButton } from "@/components/user-button"
import "./globals.css"
import type React from "react"

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "A personal website with a blog and GitHub analysis tool",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${GeistSans.className} flex flex-col min-h-screen`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <header className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Breadcrumb />
                <div className="flex items-center gap-2">
                  <div className="w-[40px]">
                    <HeaderButtons />
                  </div>
                  <div className="w-[40px] flex justify-center">
                    <ThemeSwitcher />
                  </div>
                  <div className="w-[40px] flex justify-center">
                    <UserButton />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

