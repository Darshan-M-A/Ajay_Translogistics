export type FreightType = "ftl" | "ltl"

export interface QuoteFormData {
    fullName: string
    companyName: string
    email: string
    phone: string
    origin: string
    destination: string
    freightType: FreightType
    shippingDate: string
    weight: string
}

export interface NavLink {
    label: string
    href: string
}

export interface FormStepError {
    [field: string]: string | undefined
}
