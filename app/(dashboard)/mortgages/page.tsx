import { PageHeader } from "@/components/shared/PageHeader"
import { MortgagesTable } from "@/components/mortgages/MortgagesTable"
import { DEMO_MORTGAGE_ROWS } from "@/lib/demo/data"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = { title: "Mortgages" }

export default function MortgagesPage() {
  const rows = DEMO_MORTGAGE_ROWS

  return (
    <div>
      <PageHeader
        title="Mortgages"
        description={`${rows.length} mortgage${rows.length !== 1 ? "s" : ""} across your portfolio.`}
        action={
          <Link
            href="/mortgages/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add mortgage
          </Link>
        }
      />
      <MortgagesTable data={rows} />
    </div>
  )
}
