import { PropertyDetailTabs } from "@/components/properties/PropertyDetailTabs"
import Link from "next/link"
import { ArrowLeft, Pencil } from "lucide-react"
import { notFound } from "next/navigation"
import {
  DEMO_PROPERTIES, DEMO_MORTGAGE_ROWS, DEMO_UTILITY_ROWS,
  DEMO_CONTACT_ROWS, DEMO_COMPLIANCE_ROWS, DEMO_FILE_ROWS,
} from "@/lib/demo/data"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = DEMO_PROPERTIES.find((p) => p.id === id)
  return { title: property?.name ?? "Property" }
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = DEMO_PROPERTIES.find((p) => p.id === id)
  if (!property) return notFound()

  const mortgages = DEMO_MORTGAGE_ROWS
    .filter((m) => m.property_id === id)
    .map((m) => ({
      id: m.id,
      lender_name: m.lender_name,
      product_name: m.product_name,
      fixed_end_date: m.fixed_end_date,
      monthly_payment: m.monthly_payment,
      interest_rate: null,
      loan_balance: m.loan_balance,
      review_date: m.review_date,
    }))

  const utilities = DEMO_UTILITY_ROWS
    .filter((u) => u.property_id === id)
    .map((u) => ({
      id: u.id,
      utility_type: u.utility_type,
      supplier_name: u.supplier_name,
      account_number: u.account_number,
      login_url: u.login_url,
    }))

  const contacts = DEMO_CONTACT_ROWS
    .filter((c) => c.property_count > 0)
    .slice(0, 2)
    .map((c) => ({
      id: c.id,
      full_name: c.full_name,
      company_name: c.company_name,
      category: c.category,
      phone: c.phone,
      email: c.email,
    }))

  const complianceDocs = DEMO_COMPLIANCE_ROWS
    .filter((c) => c.property_id === id)
    .map((c) => ({
      id: c.id,
      document_type: c.document_type,
      issue_date: c.issue_date,
      expiry_date: c.expiry_date,
      file_url: c.file_url,
    }))

  const files = DEMO_FILE_ROWS
    .filter((f) => f.property_id === id)
    .map((f) => ({
      id: f.id,
      file_name: f.file_name,
      category: f.category,
      file_url: f.file_url,
      description: f.description,
    }))

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/properties"
          className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All properties
        </Link>
        <Link
          href={`/properties/${id}/edit`}
          className="inline-flex items-center gap-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 px-3.5 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors shadow-sm"
        >
          <Pencil className="h-3.5 w-3.5" />
          Edit
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">{property.name}</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          {[property.address_line_1, property.city, property.postcode].filter(Boolean).join(", ")}
        </p>
      </div>

      <PropertyDetailTabs
        property={property}
        mortgages={mortgages}
        utilities={utilities}
        contacts={contacts}
        complianceDocs={complianceDocs}
        files={files}
      />
    </div>
  )
}
