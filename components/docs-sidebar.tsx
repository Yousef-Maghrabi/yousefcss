"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface SidebarItem {
  href: string
  label: string
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

interface DocsSidebarProps {
  sections: SidebarSection[]
  activeId?: string
}

export function DocsSidebar({ sections, activeId }: DocsSidebarProps) {
  return (
    <nav className="space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="text-sm font-semibold text-foreground">{section.title}</h4>
          <ul className="mt-2 space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-1.5 text-sm transition-colors",
                    activeId === item.href.replace("#", "")
                      ? "bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
