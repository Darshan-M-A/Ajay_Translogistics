import { Clock, IndianRupee, Users, ShieldCheck, Truck, Shield, MapPin, Factory, ShoppingCart, Pill, HardHat, RotateCcw, Package, Briefcase } from "lucide-react"

// ─── Company Info ────────────────────────────────────────────────────────────

export const COMPANY = {
    name: "Ajay Translogistics",
    legalName: "Ajay Translogistics Private Limited",
    tagline: "Beyond Satisfaction. Delivering Excellence.",
    foundedYear: 2005,
    incorporatedYear: 2024,
    incorporationDate: "12/06/2024",
    cin: "U52219KA2025PTC189613",
    gst: "29ABACA8591LIZI",
    pan: "ABACA8591L",
    tan: "BLRA50501D",
    email: "ajaytranslogistics@outlook.com",
    website: "https://ajaytranslogistics.com",
    address: {
        line1: "Door No. 51, Bhyra Enclave, Flat No. E1, 5th Floor",
        line2: "GPR Grande Layout, Old Chandapura Main Road",
        city: "Bangalore",
        pincode: "560081",
        state: "Karnataka",
        country: "India",
        full: "Door No. 51, Bhyra Enclave, Flat No. E1, 5th Floor, GPR Grande Layout, Old Chandapura Main Road, Bangalore - 560081",
    },
    contacts: {
        helpline: { name: "Harisha.K", phone: "+919845067621", display: "+91 98450 67621", availability: "Mon-Sat: 9am - 7pm" },
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
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
    { label: "LR Generation", href: "/lr-generation" },
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
        { label: "FTL Transport", href: "/services" },
        { label: "One-Way & Round-Trip", href: "/services" },
        { label: "Containerized Delivery", href: "/services" },
        { label: "Custom B2B Solutions", href: "/services" },
    ],
    support: [
        { label: "Enquiry / Quotation", href: "/enquiry" },
        { label: "LR Generation", href: "/lr-generation" },
        { label: "Customer Care", href: "/contact" },
    ],
} as const

// ─── Stats ───────────────────────────────────────────────────────────────────

export const STATS = [
    { icon: Clock, value: 19, suffix: "+", label: "Years Experience" },
    { icon: IndianRupee, prefix: "₹", value: 15, suffix: " Cr+", label: "Annual Turnover" },
] as const

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
    {
        icon: Truck,
        title: "Full Truck Load (FTL) Transport",
        description: "Nationwide FTL services ensuring timely delivery for bulk goods with optimized routes and real-time tracking.",
        detailedDescription: "Our FTL service provides dedicated trucks for your cargo, ensuring maximum security and faster delivery. With optimized routing algorithms and experienced drivers, we guarantee on-time delivery across 25+ cities in India. Ideal for bulk shipments that require the entire truck capacity.",
        image: "/images/service-ftl.jpg",
    },
    {
        icon: RotateCcw,
        title: "One-Way & Round-Trip Logistics",
        description: "Flexible one-way and round-trip logistics services tailored to your business schedule and requirements.",
        detailedDescription: "Whether you need a single drop or a return-load arrangement, our one-way and round-trip logistics services are designed for maximum flexibility and cost efficiency. We optimize routes and schedules to reduce turnaround time and help you save on freight costs.",
        image: "/images/roundtrip.jpg",
    },
    {
        icon: Shield,
        title: "Containerized & Secured Delivery",
        description: "Secure, weather-proof container transport for sensitive and high-value cargo, ensuring zero damage during transit.",
        detailedDescription: "Our containerized delivery service offers weather-proof, tamper-proof closed containers for sensitive and high-value cargo. Each container is sealed, GPS-tracked, and monitored throughout the journey, ensuring zero damage and complete peace of mind for our clients.",
        image: "/images/service-container.jpg",
    },
    {
        icon: Briefcase,
        title: "Custom B2B Transport Solutions",
        description: "Bespoke logistics solutions engineered for business-to-business supply chains with dedicated account management.",
        detailedDescription: "We understand that every business has unique logistics needs. Our Custom B2B Transport Solutions provide tailored freight arrangements, dedicated fleet allocation, and specialized handling protocols designed around your specific supply chain requirements.",
        image: "/images/service-gps.jpg",
    },
] as const

// ─── Technology & Strength ───────────────────────────────────────────────────

export const TECHNOLOGY_STRENGTHS = [
    { icon: MapPin, title: "Modern GPS-Enabled Fleet", description: "Every vehicle equipped with advanced GPS tracking for real-time location updates and route optimization." },
    { icon: ShieldCheck, title: "FASTag-Compliant Vehicles", description: "All vehicles are FASTag-compliant, ensuring seamless toll payments and zero delays at toll plazas." },
    { icon: Package, title: "Closed Containers for Secured Transport", description: "Weather-proof, tamper-proof closed containers to protect your cargo from environmental and transit damage." },
    { icon: MapPin, title: "Live Tracking & Route Monitoring", description: "Real-time tracking dashboard with live route monitoring, ETA updates, and delivery notifications." },
] as const

// ─── Industry Sectors ────────────────────────────────────────────────────────

export const SECTORS = [
    { icon: Factory, title: "Manufacturing", description: "End-to-end logistics for raw materials and finished goods across manufacturing units nationwide." },
    { icon: ShoppingCart, title: "Retail & FMCG", description: "Timely distribution of consumer goods with temperature-controlled options for perishable items." },
    { icon: Pill, title: "Pharma", description: "Compliant pharmaceutical logistics with secure handling, temperature monitoring, and on-time delivery." },
    { icon: HardHat, title: "Construction", description: "Heavy-duty transport solutions for construction materials, machinery, and equipment to project sites." },
] as const

// ─── Esteemed Customers / Partners ───────────────────────────────────────────

export const PARTNERS = [
    "TVS Supply Chain Solutions",
    "Godrej & Boyce",
    "Manjushree Technopack",
    "Stanley Retail",
    "VINIR Engineering",
    "Flyjac Logistics",
] as const

export const ESTEEMED_CUSTOMERS = [
    { name: "TVS Supply Chain Solutions Limited", sector: "Supply Chain & Logistics" },
    { name: "Velca Racking Systems Pvt Ltd", sector: "Industrial Racking" },
    { name: "KBROS ARISTÓ Pvt Ltd", sector: "Manufacturing" },
    { name: "Geba Cables and Wires India Pvt Ltd", sector: "Cables & Wires" },
    { name: "Mother India Forming Pvt Ltd", sector: "Metal Forming" },
    { name: "Godrej and Boyce Mfg Co Ltd", sector: "Manufacturing & Engineering" },
    { name: "Stanley Retail Limited", sector: "Retail" },
    { name: "Purva Metal Sections Pvt Ltd", sector: "Metal Sections" },
    { name: "Power Core Industries India Pvt Ltd", sector: "Industrial Manufacturing" },
    { name: "Manjushree Technopack Ltd", sector: "Packaging" },
    { name: "Relics Wood Industries Pvt Ltd", sector: "Wood & Furniture" },
    { name: "VINIR Engineering Ltd", sector: "Engineering" },
    { name: "Mudita Express Cargo Pvt Ltd", sector: "Express Cargo" },
    { name: "Disha Retail Fixtures Pvt Ltd", sector: "Retail Fixtures" },
    { name: "Maini Plastics & Composites Pvt Ltd", sector: "Plastics & Composites" },
    { name: "Elviac Logistics Pvt Ltd", sector: "Logistics" },
    { name: "Flyjac Logistics Pvt Ltd", sector: "Logistics" },
    { name: "Global TVS Bus Body Builders Ltd", sector: "Automotive" },
    { name: "Indigatech Building Solutions India Pvt Ltd", sector: "Building Solutions" },
] as const

// ─── Quote Form Steps ────────────────────────────────────────────────────────

export const FORM_STEPS = [
    { id: 1, label: "CONTACT" },
    { id: 2, label: "SHIPMENT" },
    { id: 3, label: "REVIEW" },
] as const
