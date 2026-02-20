import type { Metadata } from "next"
import { LRFormClient } from "@/components/lr/lr-form-client"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
    title: "LR Generation",
    description: `Generate Lorry Receipts (LR) for your shipments with ${COMPANY.name}. Fill in consignment details and print professional lorry receipts instantly.`,
}

export default function LRGenerationPage() {
    return (
        <div className="bg-background">
            <div className="mx-auto max-w-4xl px-4 py-10 lg:px-8 lg:py-16">
                <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-primary/20 bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    LR Generation
                </div>
                <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl text-balance">
                    Lorry Receipt Generator
                </h1>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Generate professional Lorry Receipts for your consignments. Fill in the details and print a formatted LR document.
                </p>

                <div className="mt-8">
                    <LRFormClient />
                </div>
            </div>
        </div>
    )
}
