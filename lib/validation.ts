import type { QuoteFormData, LRFormData, FormStepError } from "./types"

// ─── Validators ──────────────────────────────────────────────────────────────

const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const isValidPhone = (phone: string): boolean =>
    /^[+]?[\d\s()-]{7,15}$/.test(phone.replace(/\s/g, ""))

// ─── Step 1: Contact Validation ──────────────────────────────────────────────

export function validateContactStep(data: QuoteFormData): FormStepError {
    const errors: FormStepError = {}

    if (!data.fullName.trim()) {
        errors.fullName = "Full name is required"
    }

    if (!data.email.trim()) {
        errors.email = "Email address is required"
    } else if (!isValidEmail(data.email)) {
        errors.email = "Please enter a valid email address"
    }

    if (!data.phone.trim()) {
        errors.phone = "Phone number is required"
    } else if (!isValidPhone(data.phone)) {
        errors.phone = "Please enter a valid phone number"
    }

    return errors
}

// ─── Step 2: Shipment Validation ─────────────────────────────────────────────

export function validateShipmentStep(data: QuoteFormData): FormStepError {
    const errors: FormStepError = {}

    if (!data.origin.trim()) {
        errors.origin = "Origin city/pincode is required"
    }

    if (!data.destination.trim()) {
        errors.destination = "Destination city/pincode is required"
    }

    return errors
}

// ─── CTA Quick Quote Validation ──────────────────────────────────────────────

export function validateQuickQuote(name: string, phone: string): FormStepError {
    const errors: FormStepError = {}

    if (!name.trim()) {
        errors.name = "Name is required"
    }

    if (!phone.trim()) {
        errors.phone = "Phone number is required"
    } else if (!isValidPhone(phone)) {
        errors.phone = "Please enter a valid phone number"
    }

    return errors
}

// ─── LR Generation Validation ────────────────────────────────────────────────

export function validateLRForm(data: LRFormData): FormStepError {
    const errors: FormStepError = {}

    if (!data.lrNumber.trim()) {
        errors.lrNumber = "LR Number is required"
    }

    if (!data.date.trim()) {
        errors.date = "Date is required"
    }

    if (!data.consignorName.trim()) {
        errors.consignorName = "Consignor name is required"
    }

    if (!data.consigneeName.trim()) {
        errors.consigneeName = "Consignee name is required"
    }

    if (!data.from.trim()) {
        errors.from = "Origin is required"
    }

    if (!data.to.trim()) {
        errors.to = "Destination is required"
    }

    if (!data.truckNumber.trim()) {
        errors.truckNumber = "Truck number is required"
    }

    if (!data.goodsDescription.trim()) {
        errors.goodsDescription = "Goods description is required"
    }

    return errors
}
