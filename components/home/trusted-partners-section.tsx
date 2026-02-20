import { PARTNERS } from "@/lib/constants"

export function TrustedPartnersSection() {
  return (
    <section className="border-y border-border bg-background py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {PARTNERS.map((name) => (
              <span
                key={name}
                className="text-lg font-bold tracking-wider text-muted-foreground/60 transition-colors hover:text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
