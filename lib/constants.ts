import { Clock, IndianRupee, Users, ShieldCheck, Truck, Shield, MapPin, Factory, ShoppingCart, Pill, HardHat } from "lucide-react"

// ─── Company Info ────────────────────────────────────────────────────────────

export const COMPANY = {
    name: "Ajay Translogistics",
    legalName: "Ajay Translogistics Private Limited",
    tagline: "Beyond Satisfaction. Delivering Excellence.",
    foundedYear: 2005,
    incorporatedYear: 2024,
    cin: "U52219KA2025PTC189613",
    gst: "29ABACA8591L1ZI",
    email: "ajaytranslogistics@outlook.com",
    website: "https://ajaytranslogistics.com",
    address: {
        line1: "Door No. 51, Bhyra Enclave, Flat No. E1, 5th Floor",
        line2: "GPR Grande Layout, Old Chandapura Main Road",
        city: "Bangalore",
        pincode: "560081",
        state: "Karnataka",
        country: "India",
        full: "Door No. 51, Bhyra Enclave, Flat No. E1, 5th Floor, GPR Grande Layout, Old Chandapura Main Road, Bangalore - 560081, Karnataka, India",
    },
    contacts: {
        helpline: { name: "Harisha.K", phone: "+919845067621", display: "+91 98450 67621", availability: "24/7 Support available" },
        operations: { name: "Arun Kumar.K", phone: "+919845661649", display: "+91 98456 61649", availability: "Mon-Sat: 9am - 7pm" },
    },
    whatsapp: "+919845067621",
    social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
    },
} as const

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/#industries" },
    { label: "Contact", href: "/contact" },
] as const

// ─── Footer Links ────────────────────────────────────────────────────────────

export const FOOTER_LINKS = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Our Journey", href: "/about#journey" },
        { label: "Vision & Mission", href: "/about#vision" },
        { label: "Core Values", href: "/about#values" },
    ],
    services: [
        { label: "FTL Transport", href: "/#services" },
        { label: "Containerized Delivery", href: "/#services" },
        { label: "GPS Enabled Fleets", href: "/#services" },
        { label: "Supply Chain", href: "/#services" },
    ],
    support: [
        { label: "Request a Quote", href: "/contact" },
        { label: "Customer Care", href: "/contact" },
        { label: "Privacy Policy", href: "/contact" },
        { label: "Terms of Service", href: "/contact" },
    ],
} as const

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS = [
    { icon: Clock, value: 19, suffix: "+", label: "Years Experience" },
    { icon: IndianRupee, prefix: "₹", value: 15, suffix: " Cr+", label: "Annual Turnover" },
    { icon: Users, value: 500, suffix: "+", label: "Satisfied Clients" },
    { icon: ShieldCheck, value: 25, suffix: "+", label: "Cities Covered" },
] as const

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
    {
        icon: Truck,
        title: "Full Truck Load (FTL)",
        description: "Nationwide FTL services ensuring timely delivery for bulk goods with optimized routes and real-time tracking.",
        image: "/images/service-ftl.svg",
    },
    {
        icon: Shield,
        title: "Containerized Delivery",
        description: "Secure and weather-proof container transport for sensitive cargo, ensuring zero damage during transit.",
        image: "/images/service-container.svg",
    },
    {
        icon: MapPin,
        title: "GPS Enabled Fleets",
        description: "Advanced GPS tracking systems installed in every vehicle for real-time location updates and improved security.",
        image: "/images/service-gps.svg",
    },
] as const

// ─── Industry Sectors ────────────────────────────────────────────────────────

export const SECTORS = [
    { icon: Factory, title: "Manufacturing" },
    { icon: ShoppingCart, title: "Retail & FMCG" },
    { icon: Pill, title: "Pharma" },
    { icon: HardHat, title: "Construction" },
] as const

// ─── Trusted Partners ────────────────────────────────────────────────────────

export const PARTNERS = ["GODREJ", "TVS", "STANLEY", "L&T", "ASIAN PAINTS", "MANJUSHREE"] as const

// ─── Quote Form Steps ────────────────────────────────────────────────────────

export const FORM_STEPS = [
    { id: 1, label: "CONTACT" },
    { id: 2, label: "SHIPMENT" },
    { id: 3, label: "REVIEW" },
] as const
