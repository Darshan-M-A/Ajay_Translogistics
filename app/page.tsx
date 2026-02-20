import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesSection } from "@/components/home/services-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { TrustedPartnersSection } from "@/components/home/trusted-partners-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <TrustedPartnersSection />
      <CtaSection />
    </>
  )
}
