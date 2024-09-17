"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Logo from "@/app/_components/logo"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Logo />
      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors group-hover:bg-black/10 hover:text-foreground/80",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60 group-hover:bg-black/10"
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  )
}
