import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
    title: "Enquiry / Quotation",
    description: `Request a logistics quote from ${COMPANY.name}. Fill out our quick form and our team will respond within 2 hours with a customized quote for your shipment needs.`,
}

export default function EnquiryPage() {
    return <ContactPageClient />
}
