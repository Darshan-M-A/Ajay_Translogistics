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

export interface LRFormData {
    lrNumber: string
    date: string
    consignorName: string
    consignorAddress: string
    consignorGST: string
    consigneeName: string
    consigneeAddress: string
    consigneeGST: string
    from: string
    to: string
    truckNumber: string
    driverName: string
    driverPhone: string
    goodsDescription: string
    numberOfPackages: string
    weight: string
    invoiceNumber: string
    invoiceValue: string
    freightCharges: string
    remarks: string
}
