"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, Home } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <BookOpen className="h-6 w-6 text-primary" />
          <span>Guia VLIBRAS</span>
        </Link>

        <div className="flex items-center gap-2">
          <Button variant={pathname === "/" ? "default" : "ghost"} size="sm" asChild>
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Guia
            </Link>
          </Button>
          <Button variant={pathname === "/exemplo" ? "default" : "ghost"} size="sm" asChild>
            <Link href="/exemplo">
              <Code2 className="h-4 w-4 mr-2" />
              Exemplo
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
