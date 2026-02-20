"use client"

import { useState } from "react"
import { Phone, Truck, MapPin, Mail, ArrowRight, ArrowLeft, User, Building, Calendar, Weight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { COMPANY, FORM_STEPS, PARTNERS } from "@/lib/constants"
import { validateContactStep, validateShipmentStep } from "@/lib/validation"
import type { QuoteFormData, FormStepError } from "@/lib/types"

export function ContactPageClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormStepError>({})
  const [formData, setFormData] = useState<QuoteFormData>({
    origin: "",
    destination: "",
    freightType: "ftl",
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    shippingDate: "",
    weight: "",
  })

  const updateField = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error for field when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleNext = () => {
    if (currentStep === 1) {
      const stepErrors = validateContactStep(formData)
      setErrors(stepErrors)
      if (Object.keys(stepErrors).length > 0) return
    }
    if (currentStep === 2) {
      const stepErrors = validateShipmentStep(formData)
      setErrors(stepErrors)
      if (Object.keys(stepErrors).length > 0) return
    }
    setCurrentStep((prev) => Math.min(3, prev + 1))
  }

  const handleSubmit = () => {
    const subject = encodeURIComponent("Quote Request from Website")
    const body = encodeURIComponent(
      `Quote Request Details:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Company: ${formData.companyName || "N/A"}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Origin: ${formData.origin}\n` +
      `Destination: ${formData.destination}\n` +
      `Freight Type: ${formData.freightType === "ftl" ? "Full Truck Load (FTL)" : "Part-load / LTL"}\n` +
      `Shipping Date: ${formData.shippingDate || "Not specified"}\n` +
      `Weight: ${formData.weight ? formData.weight + " kg" : "Not specified"}\n`
    )
    window.open(`mailto:${COMPANY.email}?subject=${subject}&body=${body}`, "_self")
    setSubmitted(true)
  }

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8 lg:py-16">
        <div className="text-center mb-10">
          <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Mail className="h-3.5 w-3.5" />
            Get a Quote
          </div>
          <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl text-balance">
            {"Let's move your business forward."}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Fill out the quote request form below with your requirements, and our team will get back to you within 2 hours with a tailored logistics plan.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
          {/* Stepper */}
          <div className="mb-10 flex items-center justify-center">
            {FORM_STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <button
                    onClick={() => {
                      if (step.id < currentStep) {
                        setCurrentStep(step.id)
                        setErrors({})
                      }
                    }}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors",
                      currentStep > step.id
                        ? "bg-primary text-primary-foreground"
                        : currentStep === step.id
                          ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                          : "border-2 border-border text-muted-foreground"
                    )}
                    aria-label={`Step ${step.id}: ${step.label}`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step.id
                    )}
                  </button>
                  <span
                    className={cn(
                      "mt-2 text-xs font-semibold tracking-wider",
                      currentStep >= step.id ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </span>
                </div>
                {index < FORM_STEPS.length - 1 && (
                  <div
                    className={cn(
                      "mx-3 h-0.5 w-16 rounded-full md:w-32",
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {submitted ? (
            <SuccessMessage />
          ) : (
            <>
              {currentStep === 1 && (
                <StepContact formData={formData} updateField={updateField} errors={errors} />
              )}
              {currentStep === 2 && (
                <StepShipment formData={formData} updateField={updateField} errors={errors} />
              )}
              {currentStep === 3 && (
                <StepReview formData={formData} />
              )}

              <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                <button
                  onClick={() => { setCurrentStep((prev) => Math.max(1, prev - 1)); setErrors({}) }}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    currentStep === 1 && "invisible"
                  )}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                {currentStep < 3 ? (
                  <Button onClick={handleNext} className="gap-2">
                    Next Step <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="gap-2">
                    Submit Request <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Trusted Partners Bar */}
      <div className="border-t border-border bg-background py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 lg:gap-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted Partners
          </span>
          <div className="flex items-center gap-6">
            {PARTNERS.slice(0, 3).map((name) => (
              <span key={name} className="text-sm font-bold tracking-wider text-muted-foreground/40">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Inline Field Error ──────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="mt-1 text-xs font-medium text-destructive">{message}</p>
}

// ─── Step 1: Contact ─────────────────────────────────────────────────────────

function StepContact({
  formData,
  updateField,
  errors,
}: {
  formData: QuoteFormData
  updateField: (field: keyof QuoteFormData, value: string) => void
  errors: FormStepError
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
      <p className="mt-1 text-sm text-muted-foreground">Tell us about yourself and your company.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <div className="relative mt-1.5">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              className={cn("pl-10", errors.fullName && "border-destructive")}
            />
          </div>
          <FieldError message={errors.fullName} />
        </div>
        <div>
          <Label htmlFor="companyName" className="text-sm font-medium text-foreground">Company Name</Label>
          <div className="relative mt-1.5">
            <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <div className="relative mt-1.5">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className={cn("pl-10", errors.email && "border-destructive")}
            />
          </div>
          <FieldError message={errors.email} />
        </div>
        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <div className="relative mt-1.5">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={cn("pl-10", errors.phone && "border-destructive")}
            />
          </div>
          <FieldError message={errors.phone} />
        </div>
      </div>
    </div>
  )
}

// ─── Step 2: Shipment (no duplicate contact fields) ──────────────────────────

function StepShipment({
  formData,
  updateField,
  errors,
}: {
  formData: QuoteFormData
  updateField: (field: keyof QuoteFormData, value: string) => void
  errors: FormStepError
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">Shipment Details</h2>
      <p className="mt-1 text-sm text-muted-foreground">Tell us where your cargo is going.</p>

      {/* Origin / Destination */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <Label className="text-sm font-medium text-foreground">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">O</span>
              Origin City / Pincode <span className="text-destructive">*</span>
            </span>
          </Label>
          <div className="relative mt-1.5">
            <Truck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="e.g. Bangalore, 560100"
              value={formData.origin}
              onChange={(e) => updateField("origin", e.target.value)}
              className={cn("pl-10", errors.origin && "border-destructive")}
            />
          </div>
          <FieldError message={errors.origin} />
        </div>
        <div>
          <Label className="text-sm font-medium text-foreground">
            <span className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] text-primary-foreground">D</span>
              Destination City / Pincode <span className="text-destructive">*</span>
            </span>
          </Label>
          <div className="relative mt-1.5">
            <Truck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="e.g. Mumbai, 400001"
              value={formData.destination}
              onChange={(e) => updateField("destination", e.target.value)}
              className={cn("pl-10", errors.destination && "border-destructive")}
            />
          </div>
          <FieldError message={errors.destination} />
        </div>
      </div>

      {/* Freight Type */}
      <div className="mt-6">
        <Label className="text-sm font-medium text-foreground">Freight Type</Label>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => updateField("freightType", "ftl")}
            className={cn(
              "flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors",
              formData.freightType === "ftl"
                ? "border-primary bg-secondary"
                : "border-border bg-card hover:border-muted-foreground/30"
            )}
          >
            <div className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
              formData.freightType === "ftl" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}>
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Full Truck Load (FTL)</p>
              <p className="text-xs text-muted-foreground">Dedicated vehicle for your goods</p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => updateField("freightType", "ltl")}
            className={cn(
              "flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors",
              formData.freightType === "ltl"
                ? "border-primary bg-secondary"
                : "border-border bg-card hover:border-muted-foreground/30"
            )}
          >
            <div className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
              formData.freightType === "ltl" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            )}>
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Part-load / LTL</p>
              <p className="text-xs text-muted-foreground">Shared space, cost-effective</p>
            </div>
          </button>
        </div>
      </div>

      {/* Date and Weight */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="shippingDate" className="text-sm font-medium text-foreground">Expected Shipping Date</Label>
          <div className="relative mt-1.5">
            <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="shippingDate"
              type="date"
              value={formData.shippingDate}
              onChange={(e) => updateField("shippingDate", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="weight" className="text-sm font-medium text-foreground">Approx. Weight (kg)</Label>
          <div className="relative mt-1.5">
            <Weight className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="weight"
              type="number"
              placeholder="0.00"
              value={formData.weight}
              onChange={(e) => updateField("weight", e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Step 3: Review ──────────────────────────────────────────────────────────

function StepReview({ formData }: { formData: QuoteFormData }) {
  const items = [
    { label: "Full Name", value: formData.fullName },
    { label: "Company", value: formData.companyName },
    { label: "Email", value: formData.email },
    { label: "Phone", value: formData.phone },
    { label: "Origin", value: formData.origin },
    { label: "Destination", value: formData.destination },
    { label: "Freight Type", value: formData.freightType === "ftl" ? "Full Truck Load (FTL)" : "Part-load / LTL" },
    { label: "Shipping Date", value: formData.shippingDate },
    { label: "Weight (kg)", value: formData.weight },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">Review Your Request</h2>
      <p className="mt-1 text-sm text-muted-foreground">Please verify all details before submitting.</p>

      <div className="mt-6 rounded-xl border border-border bg-card">
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-between px-5 py-3.5">
              <span className="text-sm text-muted-foreground">{item.label}</span>
              <span className="text-sm font-medium text-card-foreground">
                {item.value || <span className="text-muted-foreground/50">Not provided</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Success Message ─────────────────────────────────────────────────────────

function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-foreground">Request Submitted!</h2>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Thank you for reaching out. Our team will review your request and get back to you within 2 hours.
      </p>
    </div>
  )
}
