import { PageHeader } from "@/components/shared/PageHeader"
import { OwnershipChart } from "@/components/properties/OwnershipChart"
import { DEMO_OWNERSHIP } from "@/lib/demo/data"

export const metadata = { title: "Ownership Structure" }

export default function OwnershipPage() {
  const properties = DEMO_OWNERSHIP

  type PropertyRow = { id: string; name: string; entity_name: string | null; status: string }
  const entityMap = new Map<string, PropertyRow[]>()
  for (const p of properties) {
    const key = p.entity_name ?? "Unknown"
    if (!entityMap.has(key)) entityMap.set(key, [])
    entityMap.get(key)!.push(p)
  }
  const entityEntries = Array.from(entityMap.entries())
    .sort((a, b) => b[1].length - a[1].length)

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex-shrink-0 px-8 py-6 border-b border-stone-100 dark:border-stone-700">
        <PageHeader
          title="Ownership Structure"
          description={`${properties.length} properties across ${entityEntries.length} entities`}
        />
      </div>
      <OwnershipChart entityEntries={entityEntries} />
    </div>
  )
}
