import type { MetadataRoute } from "next"
import { COMPANY } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = COMPANY.website

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/enquiry`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/lr-generation`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ]
}
