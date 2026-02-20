import Image from "next/image"
import { Clock, ShieldCheck, Building2, FileText, Target, Eye, Puzzle, TrendingUp, Heart, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us",
  description: "Building on nearly two decades of trust, Ajay Translogistics continues to evolve, delivering precision logistics solutions that drive Indian businesses forward.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <JourneySection />
      <VisionMissionSection />
      <CoreValuesSection />
      <QuoteSection />
    </>
  )
}

function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="Ajay Translogistics headquarters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-4 inline-block rounded-md bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            About Us
          </div>
          <h1 className="text-3xl font-bold leading-tight text-navy-foreground md:text-4xl lg:text-5xl text-balance">
            Our Legacy and Vision for the Future.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-foreground/80">
            Building on nearly two decades of trust, {COMPANY.name} continues to evolve, delivering precision logistics solutions that drive Indian businesses forward.
          </p>
        </div>
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section id="journey" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/about-truck.jpg"
                alt="Ajay Translogistics truck fleet"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 flex gap-3">
              <div className="rounded-lg bg-navy px-4 py-3 text-center text-navy-foreground shadow-lg">
                <p className="text-2xl font-bold">{new Date().getFullYear() - COMPANY.foundedYear}+</p>
                <p className="text-xs text-navy-foreground/70">Years of Service</p>
              </div>
              <div className="rounded-lg bg-navy px-4 py-3 text-center text-navy-foreground shadow-lg">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-navy-foreground/70">Dedication</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our Journey
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl text-balance">
              From Humble Beginnings to Industry Leaders
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Founded in {COMPANY.foundedYear}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Ajay Transport Corporation started its journey in {COMPANY.foundedYear} with a clear focus to simplify transportation for local businesses. What began with a small fleet has now grown into a comprehensive logistics network spanning across India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Incorporated as Private Limited in {COMPANY.incorporatedYear}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Marking a significant milestone in our expansion, we transitioned from Ajay Transport Corporation to {COMPANY.legalName} on 12th June {COMPANY.incorporatedYear}, reinforcing our commitment to corporate governance and scalable growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-muted/50 p-5">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Corporate Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">CIN Number</p>
                  <p className="font-medium text-foreground">{COMPANY.cin}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">GST Registration</p>
                  <p className="font-medium text-foreground">{COMPANY.gst}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VisionMissionSection() {
  return (
    <section id="vision" className="bg-muted/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Purpose
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Vision & Mission
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {"To become India's most trusted and integrated logistics company, driven by a singular goal to redefine logistics efficiency through innovation and unwavering commitment."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Resolving Challenges",
              description: "To resolve client logistics challenges by identifying bottlenecks and implementing smart, efficient solutions that keep supply chains moving seamlessly.",
            },
            {
              icon: TrendingUp,
              title: "FTL Leadership",
              description: "To maintain leadership in FTL logistics and expand our position as a leader in Full Truck Load services, setting benchmarks for timeliness, safety, and cost effectiveness across India.",
            },
            {
              icon: Puzzle,
              title: "Scalable Solutions",
              description: "To deliver scalable and quality-driven logistics infrastructure that grows with our clients, building long-term business value and public listing readiness.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoreValuesSection() {
  return (
    <section id="values" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Our DNA
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl text-balance">
              Core Values That Drive Us
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {"At Ajay Translogistics, our values aren't just words on a wall; they are the principles that guide every shipment, every decision, and every interaction."}
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {[
                {
                  icon: Heart,
                  title: "Trust & Integrity",
                  description: "We believe transparency builds long-lasting partnerships. You can trust us to deliver on our promises, every single time.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliability",
                  description: "In an unpredictable world, we are the constant. Our robust systems ensure your cargo reaches its destination safely and on schedule.",
                },
                {
                  icon: CheckCircle,
                  title: "Long-term Value Creation",
                  description: "We don't just move goods; we create value. We focus on cost optimization and efficiency to support your business's long-term success.",
                },
              ].map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/quote-truck.jpg"
                alt="Logistics excellence"
                width={560}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteSection() {
  return (
    <section className="bg-muted/50 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <blockquote className="text-lg font-medium italic text-foreground md:text-xl leading-relaxed">
          {'"Success in logistics is not just about speed, it\'s about the promise kept."'}
        </blockquote>
      </div>
    </section>
  )
}
