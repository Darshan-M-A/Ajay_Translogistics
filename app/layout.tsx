import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { COMPANY } from '@/lib/constants'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.website),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: 'Reliable freight forwarding and logistics solutions tailored for your business with over 19 years of operational excellence. FTL, containerized delivery, GPS-enabled fleet.',
  keywords: ['logistics', 'freight forwarding', 'FTL', 'transport', 'India', 'B2B logistics', 'Ajay Translogistics', 'Bangalore logistics', 'truck load'],
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: 'Reliable freight forwarding and logistics solutions with over 19 years of operational excellence.',
    type: 'website',
    siteName: COMPANY.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: COMPANY.legalName,
              url: COMPANY.website,
              email: COMPANY.email,
              telephone: COMPANY.contacts.helpline.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
                addressLocality: COMPANY.address.city,
                postalCode: COMPANY.address.pincode,
                addressRegion: COMPANY.address.state,
                addressCountry: COMPANY.address.country,
              },
              foundingDate: String(COMPANY.foundedYear),
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
