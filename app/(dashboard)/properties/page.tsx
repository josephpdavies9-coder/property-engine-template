import { PageHeader } from "@/components/shared/PageHeader"
import { PropertiesTable } from "@/components/properties/PropertiesTable"
import { DEMO_PROPERTY_ROWS } from "@/lib/demo/data"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = { title: "Properties" }

export default function PropertiesPage() {
  const rows = DEMO_PROPERTY_ROWS

  return (
    <div>
      <PageHeader
        title="Properties"
        description={`${rows.length} propert${rows.length !== 1 ? "ies" : "y"} in your portfolio.`}
        action={
          <Link
            href="/properties/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add property
          </Link>
        }
      />
      <PropertiesTable data={rows} />
    </div>
  )
}
