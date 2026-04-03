import Link from 'next/link'
import { Lock } from 'lucide-react'

export function DemoReadOnly({ backHref, backLabel }: { backHref: string; backLabel: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-800 mb-4">
        <Lock className="h-5 w-5 text-stone-400" />
      </div>
      <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300">Read-only demo</h2>
      <p className="mt-1 text-sm text-stone-400 dark:text-stone-500 max-w-xs">
        Editing is disabled in the demo. To manage real data, set up your own instance.
      </p>
      <div className="mt-6 flex items-center gap-3">
        <Link
          href={backHref}
          className="rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
        >
          ← {backLabel}
        </Link>
        <a
          href="https://github.com/josephpdavies9-coder/property-engine-template"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-stone-900 dark:bg-stone-700 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 dark:hover:bg-stone-600 transition-colors"
        >
          Build your own
        </a>
      </div>
    </div>
  )
}
