import { SECTORS } from "@/lib/constants"

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-muted/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Industries
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Sectors We Empower
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            From heavy machinery to FMCG, we have specialized experience in handling logistics for diverse industrial sectors.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {SECTORS.map((sector) => (
            <div
              key={sector.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                <sector.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">{sector.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
