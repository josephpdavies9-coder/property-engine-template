import { PageHeader } from "@/components/shared/PageHeader"
import { ComplianceTable } from "@/components/compliance/ComplianceTable"
import { DEMO_COMPLIANCE_SORTED } from "@/lib/demo/data"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = { title: "Compliance" }

export default function CompliancePage() {
  const rows = DEMO_COMPLIANCE_SORTED

  return (
    <div>
      <PageHeader
        title="Compliance"
        description={`${rows.length} document${rows.length !== 1 ? "s" : ""} across your portfolio.`}
        action={
          <Link
            href="/compliance/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add document
          </Link>
        }
      />
      <ComplianceTable data={rows} />
    </div>
  )
}
