import { PageHeader } from "@/components/shared/PageHeader"
import { UtilitiesTable } from "@/components/utilities/UtilitiesTable"
import { DEMO_UTILITY_ROWS } from "@/lib/demo/data"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = { title: "Utilities" }

export default function UtilitiesPage() {
  const rows = DEMO_UTILITY_ROWS

  return (
    <div>
      <PageHeader
        title="Utilities"
        description={`${rows.length} utility account${rows.length !== 1 ? "s" : ""} across your portfolio.`}
        action={
          <Link
            href="/utilities/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add utility
          </Link>
        }
      />
      <UtilitiesTable data={rows} />
    </div>
  )
}
