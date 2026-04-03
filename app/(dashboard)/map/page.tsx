import MapLoader from "@/components/map/MapLoader"
import { DEMO_MAP_PROPERTIES } from "@/lib/demo/data"
import type { PropertyStatus } from "@/lib/types/database.types"

export const metadata = { title: "Map" }

export type MapProperty = {
  id: string
  name: string
  status: PropertyStatus
  address_line_1: string
  city: string
  latitude: number
  longitude: number
}

export default function MapPage() {
  const properties = DEMO_MAP_PROPERTIES

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="mb-4 flex-shrink-0">
        <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">Map</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          {properties.length} propert{properties.length === 1 ? "y" : "ies"} across your portfolio.
        </p>
      </div>
      <div className="flex-1 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm min-h-0">
        <MapLoader properties={properties} />
      </div>
    </div>
  )
}
