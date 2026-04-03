import { PageHeader } from "@/components/shared/PageHeader"
import { FileRecordsTable } from "@/components/files/FileRecordsTable"
import { DEMO_FILE_ROWS } from "@/lib/demo/data"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = { title: "Files" }

export default function FilesPage() {
  const rows = DEMO_FILE_ROWS

  return (
    <div>
      <PageHeader
        title="Files"
        description={`${rows.length} file${rows.length !== 1 ? "s" : ""} across your portfolio.`}
        action={
          <Link
            href="/files/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add file
          </Link>
        }
      />
      <FileRecordsTable data={rows} />
    </div>
  )
}
