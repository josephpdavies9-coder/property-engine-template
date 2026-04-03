import { PageHeader } from "@/components/shared/PageHeader"
import { ContactsTable } from "@/components/contacts/ContactsTable"
import { DEMO_CONTACT_ROWS } from "@/lib/demo/data"
import Link from "next/link"
import { Plus } from "lucide-react"

export const metadata = { title: "Contacts" }

export default function ContactsPage() {
  const rows = DEMO_CONTACT_ROWS

  return (
    <div>
      <PageHeader
        title="Contacts"
        description={`${rows.length} contact${rows.length !== 1 ? "s" : ""} in your directory.`}
        action={
          <Link
            href="/contacts/new"
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2.5 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add contact
          </Link>
        }
      />
      <ContactsTable data={rows} />
    </div>
  )
}
