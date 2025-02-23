"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`
          const isLast = index === pathSegments.length - 1
          return (
            <li key={segment}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link
                  href={href}
                  className={`ml-1 text-sm font-medium md:ml-2 ${
                    isLast ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

