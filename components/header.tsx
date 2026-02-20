"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LogoIcon } from "@/components/logo-icon"
import { NAV_LINKS, COMPANY } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href.split("#")[0])
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <LogoIcon className="h-8 w-8" />
          <span className="text-lg font-bold text-foreground">{COMPANY.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.href)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${COMPANY.contacts.helpline.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Phone className="h-4 w-4" />
            <span>Helpline: {COMPANY.contacts.helpline.display}</span>
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden animate-slide-down">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${COMPANY.contacts.helpline.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <Phone className="h-4 w-4" />
              <span>Helpline: {COMPANY.contacts.helpline.display}</span>
            </a>
            <Button asChild size="sm" className="w-full">
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
