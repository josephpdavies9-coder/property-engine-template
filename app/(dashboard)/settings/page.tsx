'use client'

import { PageHeader } from '@/components/shared/PageHeader'

export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Account and application settings."
      />
      <div className="space-y-4 max-w-2xl">
        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">Demo mode</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            This is a read-only demo. Sign in is disabled and all data is fictional.
            To build your own version, visit the{' '}
            <a
              href="https://github.com/josephpdavies9-coder/property-engine-template"
              className="underline text-stone-700 dark:text-stone-300"
              target="_blank"
              rel="noreferrer"
            >
              template repo
            </a>
            {' '}and follow the setup guide.
          </p>
        </div>
        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">Further settings</h2>
          <p className="text-sm text-stone-400 dark:text-stone-500">Additional settings will be added here over time.</p>
        </div>
      </div>
    </div>
  )
}
