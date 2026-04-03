import { Star } from "lucide-react"

export const metadata = { title: "Reviews" }

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="px-8 pt-8 pb-6 border-b border-stone-200 dark:border-stone-700">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Reviews</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          0 properties · Airbnb &amp; Booking.com scores
        </p>
      </div>
      <div className="flex-1 px-8 py-6">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Star className="h-10 w-10 text-stone-300 dark:text-stone-600 mb-3" />
          <h3 className="text-sm font-semibold text-stone-700 dark:text-stone-300">No holiday lets in this portfolio</h3>
          <p className="text-sm text-stone-400 dark:text-stone-500 mt-1">
            Review scores appear here for Airbnb and Booking.com properties.
          </p>
        </div>
      </div>
    </div>
  )
}
