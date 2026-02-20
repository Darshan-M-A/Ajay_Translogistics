import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { LogoIcon } from "@/components/logo-icon"
import { COMPANY, FOOTER_LINKS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon className="h-12 w-20" />
              <span className="text-lg font-bold text-navy-foreground">{COMPANY.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              With over 19+ years of experience, we provide top-tier logistics solutions that drive business growth through reliability and efficiency.
            </p>

          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Support
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-foreground/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy-foreground">
                Contact Us
              </h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2 text-sm text-navy-foreground/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{COMPANY.address.full}</span>
                </div>
                <a href={`tel:${COMPANY.contacts.helpline.phone}`} className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>{COMPANY.contacts.helpline.display}</span>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{COMPANY.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-foreground/10 pt-6">
          <p className="text-center text-xs text-navy-foreground/50">
            &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="mt-1 text-center text-xs text-navy-foreground/40">
            CIN: {COMPANY.cin} | GST: {COMPANY.gst} | PAN: {COMPANY.pan} | TAN: {COMPANY.tan}
          </p>
        </div>
      </div>
    </footer>
  )
}
