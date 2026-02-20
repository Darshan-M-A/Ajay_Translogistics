import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-trucks.jpg"
          alt="Fleet of modern logistics trucks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-navy-foreground/10 px-4 py-1.5 text-sm text-navy-foreground backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>ISO 9001:2015 Certified</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-foreground md:text-5xl lg:text-6xl text-balance">
            Beyond Satisfaction. Delivering Excellence.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-foreground/80 md:text-lg">
            Reliable freight forwarding and logistics solutions tailored for your business with over 19+ years of operational excellence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/enquiry">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-navy-foreground/10 text-navy-foreground border-navy-foreground/20 hover:bg-navy-foreground/20 hover:text-navy-foreground">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
