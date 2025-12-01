"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Box, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  href: string
  label: string
}

const navItems: NavItem[] = [
  { href: "/getting-started", label: "Getting Started" },
  { href: "/tokens", label: "Tokens" },
  { href: "/components", label: "Components" },
  { href: "/utilities", label: "Utilities" },
  { href: "/effects", label: "Effects" },
  { href: "/examples", label: "Examples" },
]

interface DocsLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  title: string
  description?: string
}

export function DocsLayout({ children, sidebar, title, description }: DocsLayoutProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
            <Box className="h-6 w-6 text-primary" />
            <span>CSS Framework</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  pathname === item.href ? "text-foreground font-medium" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex gap-12">
          {/* Sidebar */}
          {sidebar && (
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-24">{sidebar}</div>
            </aside>
          )}

          {/* Content */}
          <main className="min-w-0 flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
              {description && <p className="mt-3 text-lg text-muted-foreground">{description}</p>}
            </div>
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 CSS Framework. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
