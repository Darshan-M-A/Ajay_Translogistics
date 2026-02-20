"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { validateQuickQuote } from "@/lib/validation"
import type { FormStepError } from "@/lib/types"

export function CtaSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<FormStepError>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    const validationErrors = validateQuickQuote(name, phone)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    // Open mailto with pre-filled subject and body
    const subject = encodeURIComponent("Quick Quote Request")
    const body = encodeURIComponent(
      `Hi Ajay Translogistics,\n\nI'd like a quick quote for logistics services.\n\nName: ${name}\nPhone: ${phone}\n\nPlease reach out at your earliest convenience.\n\nThank you.`
    )
    window.open(`mailto:${COMPANY.email}?subject=${subject}&body=${body}`, "_self")

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
              <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary-foreground">Thank You!</h2>
            <p className="text-sm text-primary-foreground/80">
              We&apos;ll get back to you within 2 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Ready to Move Your Business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          Get a customized quote tailored to your specific logistics requirements. Our team is ready to assist you 24/7.
        </p>

        <div className="mx-auto mt-8 flex max-w-lg flex-col items-stretch gap-3 sm:flex-row sm:items-start">
          <div className="flex-1">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })) }}
              className="h-11 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 focus-visible:ring-primary-foreground/50"
            />
            {errors.name && <p className="mt-1 text-xs text-primary-foreground/90 font-medium">{errors.name}</p>}
          </div>
          <div className="flex-1">
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => { setPhone(e.target.value); setErrors((p) => ({ ...p, phone: undefined })) }}
              className="h-11 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 focus-visible:ring-primary-foreground/50"
            />
            {errors.phone && <p className="mt-1 text-xs text-primary-foreground/90 font-medium">{errors.phone}</p>}
          </div>
          <Button
            variant="secondary"
            className="h-11 shrink-0 font-semibold"
            onClick={handleSubmit}
          >
            Get Free Quote
          </Button>
        </div>

        <p className="mt-4 text-xs text-primary-foreground/60">
          No commitment required. We respond within 2 hours.
        </p>
      </div>
    </section>
  )
}
