"use client"

import { useState, useRef } from "react"
import { FileText, Printer, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { COMPANY } from "@/lib/constants"
import { validateLRForm } from "@/lib/validation"
import type { LRFormData, FormStepError } from "@/lib/types"

export function LRFormClient() {
    const printRef = useRef<HTMLDivElement>(null)
    const [errors, setErrors] = useState<FormStepError>({})
    const [generated, setGenerated] = useState(false)
    const [formData, setFormData] = useState<LRFormData>({
        lrNumber: "",
        date: new Date().toISOString().split("T")[0],
        consignorName: "",
        consignorAddress: "",
        consignorGST: "",
        consigneeName: "",
        consigneeAddress: "",
        consigneeGST: "",
        from: "",
        to: "",
        truckNumber: "",
        driverName: "",
        driverPhone: "",
        goodsDescription: "",
        numberOfPackages: "",
        weight: "",
        invoiceNumber: "",
        invoiceValue: "",
        freightCharges: "",
        remarks: "",
    })

    const updateField = (field: keyof LRFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    const handleGenerate = () => {
        const validationErrors = validateLRForm(formData)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) return
        setGenerated(true)
    }

    const handlePrint = () => {
        window.print()
    }

    const handleReset = () => {
        setGenerated(false)
        setFormData({
            lrNumber: "",
            date: new Date().toISOString().split("T")[0],
            consignorName: "",
            consignorAddress: "",
            consignorGST: "",
            consigneeName: "",
            consigneeAddress: "",
            consigneeGST: "",
            from: "",
            to: "",
            truckNumber: "",
            driverName: "",
            driverPhone: "",
            goodsDescription: "",
            numberOfPackages: "",
            weight: "",
            invoiceNumber: "",
            invoiceValue: "",
            freightCharges: "",
            remarks: "",
        })
        setErrors({})
    }

    if (generated) {
        return (
            <div>
                <div className="mb-6 flex items-center justify-between no-print">
                    <h2 className="text-2xl font-bold text-foreground">Lorry Receipt Preview</h2>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={handleReset} className="gap-2">
                            <RotateCcw className="h-4 w-4" /> New LR
                        </Button>
                        <Button onClick={handlePrint} className="gap-2">
                            <Printer className="h-4 w-4" /> Print LR
                        </Button>
                    </div>
                </div>

                <div ref={printRef} className="rounded-xl border border-border bg-card p-8 print:border-black print:rounded-none print:p-4">
                    {/* LR Header */}
                    <div className="border-b-2 border-foreground pb-4 mb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold text-foreground">{COMPANY.legalName}</h1>
                                <p className="text-xs text-muted-foreground mt-1">{COMPANY.address.full}</p>
                                <p className="text-xs text-muted-foreground">
                                    Phone: {COMPANY.contacts.helpline.display} | Email: {COMPANY.email}
                                </p>
                                <p className="text-xs text-muted-foreground">GST: {COMPANY.gst} | CIN: {COMPANY.cin}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-primary">LORRY RECEIPT</p>
                                <p className="text-sm font-semibold text-foreground">LR No: {formData.lrNumber}</p>
                                <p className="text-sm text-muted-foreground">Date: {formData.date}</p>
                            </div>
                        </div>
                    </div>

                    {/* Consignor / Consignee */}
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div className="rounded-lg border border-border p-4">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Consignor (Sender)</h3>
                            <p className="font-semibold text-foreground">{formData.consignorName}</p>
                            <p className="text-sm text-muted-foreground">{formData.consignorAddress || "—"}</p>
                            <p className="text-sm text-muted-foreground">GST: {formData.consignorGST || "—"}</p>
                        </div>
                        <div className="rounded-lg border border-border p-4">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Consignee (Receiver)</h3>
                            <p className="font-semibold text-foreground">{formData.consigneeName}</p>
                            <p className="text-sm text-muted-foreground">{formData.consigneeAddress || "—"}</p>
                            <p className="text-sm text-muted-foreground">GST: {formData.consigneeGST || "—"}</p>
                        </div>
                    </div>

                    {/* Transport Details */}
                    <div className="rounded-lg border border-border p-4 mb-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Transport Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <p className="text-muted-foreground">From</p>
                                <p className="font-medium text-foreground">{formData.from}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">To</p>
                                <p className="font-medium text-foreground">{formData.to}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Truck No.</p>
                                <p className="font-medium text-foreground">{formData.truckNumber}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Driver</p>
                                <p className="font-medium text-foreground">{formData.driverName || "—"} {formData.driverPhone ? `(${formData.driverPhone})` : ""}</p>
                            </div>
                        </div>
                    </div>

                    {/* Goods Details */}
                    <div className="rounded-lg border border-border p-4 mb-4">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Goods Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="col-span-2">
                                <p className="text-muted-foreground">Description</p>
                                <p className="font-medium text-foreground">{formData.goodsDescription}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Packages</p>
                                <p className="font-medium text-foreground">{formData.numberOfPackages || "—"}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Weight (kg)</p>
                                <p className="font-medium text-foreground">{formData.weight || "—"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Invoice & Charges */}
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        <div className="rounded-lg border border-border p-4">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Invoice Details</h3>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <p className="text-muted-foreground">Invoice No.</p>
                                    <p className="font-medium text-foreground">{formData.invoiceNumber || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-muted-foreground">Invoice Value</p>
                                    <p className="font-medium text-foreground">{formData.invoiceValue ? `₹${formData.invoiceValue}` : "—"}</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border border-border p-4">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Charges</h3>
                            <div className="text-sm">
                                <p className="text-muted-foreground">Freight Charges</p>
                                <p className="text-xl font-bold text-foreground">{formData.freightCharges ? `₹${formData.freightCharges}` : "—"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Remarks */}
                    {formData.remarks && (
                        <div className="rounded-lg border border-border p-4 mb-4">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Remarks</h3>
                            <p className="text-sm text-foreground">{formData.remarks}</p>
                        </div>
                    )}

                    {/* Signature */}
                    <div className="mt-8 grid grid-cols-3 gap-8 pt-4 border-t border-border">
                        <div className="text-center">
                            <div className="h-16 border-b border-dashed border-border" />
                            <p className="mt-2 text-xs text-muted-foreground">Consignor&apos;s Signature</p>
                        </div>
                        <div className="text-center">
                            <div className="h-16 border-b border-dashed border-border" />
                            <p className="mt-2 text-xs text-muted-foreground">Driver&apos;s Signature</p>
                        </div>
                        <div className="text-center">
                            <div className="h-16 border-b border-dashed border-border" />
                            <p className="mt-2 text-xs text-muted-foreground">For {COMPANY.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-foreground">Create New Lorry Receipt</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill in the details below to generate a printable Lorry Receipt (LR).</p>

            {/* LR Basic Info */}
            <div className="mt-6 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">LR Information</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <Label htmlFor="lrNumber" className="text-sm font-medium text-foreground">
                            LR Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="lrNumber"
                            placeholder="e.g. ATL-2026-001"
                            value={formData.lrNumber}
                            onChange={(e) => updateField("lrNumber", e.target.value)}
                            className={cn("mt-1.5", errors.lrNumber && "border-destructive")}
                        />
                        {errors.lrNumber && <p className="mt-1 text-xs font-medium text-destructive">{errors.lrNumber}</p>}
                    </div>
                    <div>
                        <Label htmlFor="date" className="text-sm font-medium text-foreground">
                            Date <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => updateField("date", e.target.value)}
                            className={cn("mt-1.5", errors.date && "border-destructive")}
                        />
                        {errors.date && <p className="mt-1 text-xs font-medium text-destructive">{errors.date}</p>}
                    </div>
                </div>
            </div>

            {/* Consignor */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Consignor (Sender)</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <Label className="text-sm font-medium text-foreground">
                            Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="Consignor Name"
                            value={formData.consignorName}
                            onChange={(e) => updateField("consignorName", e.target.value)}
                            className={cn("mt-1.5", errors.consignorName && "border-destructive")}
                        />
                        {errors.consignorName && <p className="mt-1 text-xs font-medium text-destructive">{errors.consignorName}</p>}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">GST Number</Label>
                        <Input
                            placeholder="GSTIN"
                            value={formData.consignorGST}
                            onChange={(e) => updateField("consignorGST", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Label className="text-sm font-medium text-foreground">Address</Label>
                        <Input
                            placeholder="Full Address"
                            value={formData.consignorAddress}
                            onChange={(e) => updateField("consignorAddress", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                </div>
            </div>

            {/* Consignee */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Consignee (Receiver)</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <Label className="text-sm font-medium text-foreground">
                            Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="Consignee Name"
                            value={formData.consigneeName}
                            onChange={(e) => updateField("consigneeName", e.target.value)}
                            className={cn("mt-1.5", errors.consigneeName && "border-destructive")}
                        />
                        {errors.consigneeName && <p className="mt-1 text-xs font-medium text-destructive">{errors.consigneeName}</p>}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">GST Number</Label>
                        <Input
                            placeholder="GSTIN"
                            value={formData.consigneeGST}
                            onChange={(e) => updateField("consigneeGST", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <Label className="text-sm font-medium text-foreground">Address</Label>
                        <Input
                            placeholder="Full Address"
                            value={formData.consigneeAddress}
                            onChange={(e) => updateField("consigneeAddress", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                </div>
            </div>

            {/* Transport Details */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Transport Details</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <Label className="text-sm font-medium text-foreground">
                            From (Origin) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="Origin City"
                            value={formData.from}
                            onChange={(e) => updateField("from", e.target.value)}
                            className={cn("mt-1.5", errors.from && "border-destructive")}
                        />
                        {errors.from && <p className="mt-1 text-xs font-medium text-destructive">{errors.from}</p>}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">
                            To (Destination) <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="Destination City"
                            value={formData.to}
                            onChange={(e) => updateField("to", e.target.value)}
                            className={cn("mt-1.5", errors.to && "border-destructive")}
                        />
                        {errors.to && <p className="mt-1 text-xs font-medium text-destructive">{errors.to}</p>}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">
                            Truck Number <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="e.g. KA-01-AB-1234"
                            value={formData.truckNumber}
                            onChange={(e) => updateField("truckNumber", e.target.value)}
                            className={cn("mt-1.5", errors.truckNumber && "border-destructive")}
                        />
                        {errors.truckNumber && <p className="mt-1 text-xs font-medium text-destructive">{errors.truckNumber}</p>}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">Driver Name</Label>
                        <Input
                            placeholder="Driver Name"
                            value={formData.driverName}
                            onChange={(e) => updateField("driverName", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">Driver Phone</Label>
                        <Input
                            placeholder="Driver Phone Number"
                            value={formData.driverPhone}
                            onChange={(e) => updateField("driverPhone", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                </div>
            </div>

            {/* Goods Details */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Goods Details</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                        <Label className="text-sm font-medium text-foreground">
                            Description of Goods <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            placeholder="e.g. Industrial Paint Drums"
                            value={formData.goodsDescription}
                            onChange={(e) => updateField("goodsDescription", e.target.value)}
                            className={cn("mt-1.5", errors.goodsDescription && "border-destructive")}
                        />
                        {errors.goodsDescription && <p className="mt-1 text-xs font-medium text-destructive">{errors.goodsDescription}</p>}
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">Number of Packages</Label>
                        <Input
                            type="number"
                            placeholder="0"
                            value={formData.numberOfPackages}
                            onChange={(e) => updateField("numberOfPackages", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">Weight (kg)</Label>
                        <Input
                            type="number"
                            placeholder="0.00"
                            value={formData.weight}
                            onChange={(e) => updateField("weight", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                </div>
            </div>

            {/* Invoice & Charges */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Invoice & Charges</h3>
                <div className="grid gap-4 md:grid-cols-3">
                    <div>
                        <Label className="text-sm font-medium text-foreground">Invoice Number</Label>
                        <Input
                            placeholder="INV-001"
                            value={formData.invoiceNumber}
                            onChange={(e) => updateField("invoiceNumber", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">Invoice Value (₹)</Label>
                        <Input
                            type="number"
                            placeholder="0.00"
                            value={formData.invoiceValue}
                            onChange={(e) => updateField("invoiceValue", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                    <div>
                        <Label className="text-sm font-medium text-foreground">Freight Charges (₹)</Label>
                        <Input
                            type="number"
                            placeholder="0.00"
                            value={formData.freightCharges}
                            onChange={(e) => updateField("freightCharges", e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                </div>
            </div>

            {/* Remarks */}
            <div className="mt-4 rounded-xl border border-border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Remarks</h3>
                <Input
                    placeholder="Any additional notes or special instructions"
                    value={formData.remarks}
                    onChange={(e) => updateField("remarks", e.target.value)}
                    className="mt-1.5"
                />
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-end">
                <Button onClick={handleGenerate} size="lg" className="gap-2">
                    <FileText className="h-4 w-4" /> Generate Lorry Receipt
                </Button>
            </div>
        </div>
    )
}
