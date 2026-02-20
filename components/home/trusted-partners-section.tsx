"use client"

import { ESTEEMED_CUSTOMERS } from "@/lib/constants"

export function TrustedPartnersSection() {
  // Double the array for seamless infinite scroll
  const scrollItems = [...ESTEEMED_CUSTOMERS, ...ESTEEMED_CUSTOMERS]

  return (
    <section className="border-y border-border bg-background py-10 lg:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

        {/* Sliding track */}
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {scrollItems.map((customer, index) => (
            <div
              key={`${customer.name}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-5 py-3 transition-shadow hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                {customer.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold tracking-wide text-card-foreground">
                {customer.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
