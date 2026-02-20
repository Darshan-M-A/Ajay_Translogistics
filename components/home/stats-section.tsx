"use client"

import { STATS } from "@/lib/constants"
import { useCountUp } from "@/hooks/useCountUp"

function StatItem({ stat }: { stat: (typeof STATS)[number] }) {
  const { count, ref } = useCountUp(stat.value)

  return (
    <div ref={ref} className="flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
        <stat.icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground">
          {"prefix" in stat && stat.prefix ? stat.prefix : ""}
          {count}
          {stat.suffix}
        </p>
        <p className="text-sm text-muted-foreground">{stat.label}</p>
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
