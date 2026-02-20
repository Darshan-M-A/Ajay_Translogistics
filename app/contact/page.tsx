import Link from "next/link"
import { Phone, Mail, MapPin, Truck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us / Helpline",
  description: `Reach out to ${COMPANY.name} for any queries. Call our 24/7 helpline or visit our Bangalore headquarters. We're here to help.`,
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16">
        <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Mail className="h-3.5 w-3.5" />
          Contact Us
        </div>
        <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl text-balance">
          Get in Touch with Us
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Have questions? Need assistance? Our team is available around the clock. Reach out via phone, email, or visit our headquarters.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {COMPANY.contacts.helpline.name}
                  </p>
                  <a href={`tel:${COMPANY.contacts.helpline.phone}`} className="mt-1 block text-xl font-bold text-card-foreground">
                    {COMPANY.contacts.helpline.display}
                  </a>
                  <p className="text-sm text-muted-foreground">{COMPANY.contacts.helpline.availability}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {COMPANY.contacts.operations.name}
                  </p>
                  <a href={`tel:${COMPANY.contacts.operations.phone}`} className="mt-1 block text-xl font-bold text-card-foreground">
                    {COMPANY.contacts.operations.display}
                  </a>
                  <p className="text-sm text-muted-foreground">{COMPANY.contacts.operations.availability}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="mt-1 block text-lg font-bold text-card-foreground">
                    {COMPANY.email}
                  </a>
                  <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-secondary/50 p-6">
              <p className="text-sm font-semibold text-foreground">Need a logistics quote?</p>
              <p className="mt-1 text-sm text-muted-foreground">Use our dedicated enquiry form to get a customized quote for your shipment.</p>
              <Button asChild size="sm" className="mt-4 gap-2">
                <Link href="/enquiry">
                  Go to Enquiry <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Map & Address */}
          <div>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
              <div>
                <h3 className="font-semibold text-foreground">Bangalore Headquarters</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary">
                  {COMPANY.address.full}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.49085452697098!3d12.953847716438836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1706000000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bangalore headquarters location"
                className="w-full"
              />
            </div>

            <div className="mt-6 rounded-xl border border-border bg-muted/50 p-5">
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
                <div>
                  <p className="text-muted-foreground">PAN</p>
                  <p className="font-medium text-foreground">{COMPANY.pan}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">TAN</p>
                  <p className="font-medium text-foreground">{COMPANY.tan}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Incorporation Date</p>
                  <p className="font-medium text-foreground">{COMPANY.incorporationDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
