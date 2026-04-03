'use client'

import { FlaskConical, ExternalLink } from 'lucide-react'

export function DemoBanner() {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 text-xs" style={{ backgroundColor: '#CF7454' }}>
      <div className="flex items-center gap-2 text-white/90">
        <FlaskConical className="h-3.5 w-3.5 flex-shrink-0 text-white" />
        <span>
          <strong className="text-white font-semibold">Demo mode</strong>
          {' '}— all data is fictional. Changes are not saved.
        </span>
      </div>
      <a
        href="https://github.com/josephpdavies9-coder/property-engine-template"
        target="_blank"
        rel="noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-1 rounded-md bg-white/15 hover:bg-white/25 px-2.5 py-1 font-medium text-white transition-colors"
      >
        Build yours
        <ExternalLink className="h-3 w-3" />
      </a>
    </div>
  )
}
