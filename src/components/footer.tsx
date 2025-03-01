import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto flex h-full items-center justify-center py-10 md:h-24 md:py-0">
        <nav>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}

