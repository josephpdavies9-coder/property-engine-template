'use client'

import { Download } from 'lucide-react'

type Props = {
  data: Record<string, string | number | null | undefined>[]
  filename: string
}

export function ExportCsvButton({ data, filename }: Props) {
  function handleExport() {
    if (!data.length) return

    const headers = Object.keys(data[0])
    const escape = (val: string | number | null | undefined) => {
      if (val === null || val === undefined) return ''
      const s = String(val)
      return s.includes(',') || s.includes('"') || s.includes('\n')
        ? `"${s.replace(/"/g, '""')}"`
        : s
    }

    const csv = [
      headers.join(','),
      ...data.map(row => headers.map(h => escape(row[h])).join(',')),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename.endsWith('.csv') ? filename : `${filename}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleExport}
      disabled={!data.length}
      className="inline-flex items-center gap-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 px-4 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <Download className="h-4 w-4" />
      Export CSV
    </button>
  )
}
