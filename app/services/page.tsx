import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SERVICES, TECHNOLOGY_STRENGTHS, COMPANY } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services",
    description: `Explore the full range of logistics services offered by ${COMPANY.name} — FTL Transport, One-Way & Round-Trip Logistics, Containerized Delivery, and Custom B2B Solutions.`,
}

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <TechnologySection />
            <WhyChooseUs />
            <ServicesCTA />
        </>
    )
}

function ServicesHero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-trucks.jpg"
                    alt="Logistics services fleet"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/85" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
                <div className="max-w-2xl">
                    <div className="mb-4 inline-block rounded-md bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                        Our Services
                    </div>
                    <h1 className="text-3xl font-bold leading-tight text-navy-foreground md:text-4xl lg:text-5xl text-balance">
                        Comprehensive Logistics Solutions
                    </h1>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-navy-foreground/80">
                        From Full Truck Load services to custom B2B transport solutions, we offer end-to-end logistics designed to keep your supply chain moving efficiently.
                    </p>
                </div>
            </div>
        </section>
    )
}

function ServicesGrid() {
    return (
        <section className="bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        What We Offer
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
                        Services Tailored for Your Business
                    </h2>
                </div>

                <div className="mt-12 flex flex-col gap-16">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.title}
                            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                        >
                            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                                    <service.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                                    {service.detailedDescription}
                                </p>
                                <Link
                                    href="/enquiry"
                                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                                >
                                    Request a Quote <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TechnologySection() {
    return (
        <section className="bg-muted/50 py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Technology & Strength
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl text-balance">
                        Powered by Modern Technology
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        We leverage cutting-edge technology and robust infrastructure to ensure your logistics are efficient, secure, and transparent.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {TECHNOLOGY_STRENGTHS.map((item) => (
                        <div
                            key={item.title}
                            className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function WhyChooseUs() {
    const reasons = [
        "19+ years of operational excellence",
        "Modern GPS-enabled & FASTag-compliant fleet",
        "Pan-India network covering 25+ cities",
        "Dedicated account managers for every client",
        "100% on-time delivery commitment",
        "Closed containers for secured transport",
    ]

    return (
        <section className="bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                            Why Choose Us
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl text-balance">
                            The {COMPANY.name} Advantage
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                            We don&apos;t just transport goods — we build long-term partnerships. Our client-first approach, combined with cutting-edge technology, ensures your logistics are in the safest hands.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {reasons.map((reason) => (
                                <div key={reason} className="flex items-start gap-2">
                                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                    <span className="text-sm text-foreground">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-2xl">
                        <Image
                            src="/images/about-truck.jpg"
                            alt="Our logistics advantage"
                            width={600}
                            height={400}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServicesCTA() {
    return (
        <section className="bg-primary py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
                <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                    Need a Custom Logistics Solution?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                    Tell us about your requirements and our team will craft a tailored logistics plan for your business.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Button asChild size="lg" variant="secondary" className="gap-2">
                        <Link href="/enquiry">
                            Get a Quote <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20 hover:text-primary-foreground">
                        <Link href="/contact">Contact Helpline</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
