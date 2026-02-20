import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a quote for your logistics needs. Reach out to our Bangalore headquarters or fill out our multi-step quote request form.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
