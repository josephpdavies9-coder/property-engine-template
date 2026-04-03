import Link from "next/link"
import {
  Building2, CheckCircle2, Wrench, Eye, Clock, ArrowRight,
  TrendingUp, PieChart, Wallet, Banknote, ShieldCheck, Star,
  CalendarClock, ArrowUpRight,
} from "lucide-react"
import { StatusBadge } from "@/components/shared/StatusBadge"
import { ExpiryBadge } from "@/components/shared/ExpiryBadge"
import { ComplianceDocTypeBadge } from "@/components/compliance/ComplianceDocTypeBadge"
import { formatDate } from "@/lib/utils"
import { DEMO_DASHBOARD, DEMO_PROPERTIES } from "@/lib/demo/data"

export const metadata = { title: "Dashboard" }

function StatCard({ label, value, icon: Icon, note, href }: {
  label: string; value: string | number; icon: React.ElementType; note?: string; href?: string
}) {
  const inner = (
    <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 p-5 shadow-sm h-full transition-colors hover:border-stone-300 dark:hover:border-stone-600">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-stone-500 dark:text-stone-400">{label}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-700">
          <Icon className="h-4 w-4 text-stone-600 dark:text-stone-400" />
        </div>
      </div>
      <p className="mt-3 text-3xl font-semibold text-stone-900 dark:text-stone-100">{value}</p>
      {note && <p className="mt-1 text-xs text-stone-400 dark:text-stone-500">{note}</p>}
    </div>
  )
  return href ? <Link href={href}>{inner}</Link> : <div>{inner}</div>
}

function SectionHeader({ icon: Icon, title, href }: { icon: React.ElementType; title: string; href: string }) {
  return (
    <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-700 px-5 py-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-stone-500 dark:text-stone-400" />
        <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100">{title}</h2>
      </div>
      <Link href={href} className="inline-flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors">
        View all <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  )
}

function formatPortfolioValue(v: number) {
  return v >= 1_000_000 ? `£${(v / 1_000_000).toFixed(2)}m` : `£${(v / 1_000).toFixed(0)}k`
}

export default function DashboardPage() {
  const d = DEMO_DASHBOARD

  const reminders = [
    ...d.complianceAlerts.map(c => ({ ...c, kind: 'compliance' as const })),
    ...d.mortgageAlerts.map(m => ({ ...m, kind: 'mortgage' as const })),
  ].sort((a, b) => a.date.localeCompare(b.date))

  const recentProperties = [...DEMO_PROPERTIES]
    .sort((a, b) => b.updated_at.localeCompare(a.updated_at))
    .slice(0, 6)

  const validDocs = d.totalDocs - d.expiredDocs

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100">Dashboard</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">Overview of your property portfolio.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total properties"      value={d.total}        icon={Building2}    note="in your portfolio"                                                href="/properties" />
        <StatCard label="Let"                   value={d.letCount}     icon={CheckCircle2} note={`${Math.round((d.letCount / d.total) * 100)}% of portfolio`}     href="/properties" />
        <StatCard label="Vacant"                value={d.vacantCount}  icon={Eye}          note="between tenants"                                                  href="/properties" />
        <StatCard label="Under refurb"          value={d.refurbCount}  icon={Wrench}       note="being refurbished"                                                href="/properties" />
        <StatCard label="Portfolio value"       value={formatPortfolioValue(d.portfolioValue)}  icon={TrendingUp}   note={`£${d.portfolioValue.toLocaleString("en-GB")}`}          href="/properties" />
        <StatCard label="Total equity"          value={formatPortfolioValue(d.portfolioEquity)} icon={Wallet}       note={`£${d.portfolioEquity.toLocaleString("en-GB")}`}         href="/properties" />
        <StatCard label="Portfolio LTV"         value={`${d.portfolioLtv}%`}                    icon={PieChart}     note={`£${d.totalDebt.toLocaleString("en-GB")} debt`}          href="/mortgages" />
        <StatCard label="Monthly mortgage cost" value={`£${d.monthlyMortgageCost.toLocaleString("en-GB")}`} icon={Banknote} note={`£${(d.monthlyMortgageCost * 12).toLocaleString("en-GB")} / year`} href="/mortgages" />
        <StatCard label="Monthly income"        value={`£${d.monthlyIncome.toLocaleString("en-GB")}`}       icon={ArrowUpRight} note={`£${(d.monthlyIncome * 12).toLocaleString("en-GB")} / year`} href="/properties" />
        <StatCard label="Gross monthly profit"  value={`£${d.monthlyCashflow.toLocaleString("en-GB")}`}     icon={Wallet}   note={`£${(d.monthlyCashflow * 12).toLocaleString("en-GB")} / year`} href="/properties" />
        <StatCard label="Gross yield"           value={`${d.grossYield.toFixed(1)}%`}                        icon={TrendingUp} note="annual rent / portfolio value" href="/properties" />
      </div>

      {/* Reminders */}
      <div className="mt-8 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm overflow-hidden">
        <SectionHeader icon={Clock} title="Upcoming reminders" href="/compliance" />
        {reminders.length === 0 ? (
          <div className="px-5 py-8 text-center"><p className="text-sm text-stone-400 dark:text-stone-500">No compliance or mortgage deadlines in the next 6 months.</p></div>
        ) : (
          <div className="divide-y divide-stone-100 dark:divide-stone-700">
            {reminders.map((r, i) => (
              <Link
                key={i}
                href={r.kind === 'mortgage' ? `/mortgages/${r.id}/edit` : `/compliance/${r.id}/edit`}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{r.propertyName}</p>
                  <div className="mt-0.5">
                    {r.kind === 'mortgage' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-200 dark:ring-blue-700">
                        {r.isReview ? <CalendarClock className="h-3 w-3" /> : null}
                        {r.isReview ? 'Review due' : 'Rate expires'} · {r.lender}
                      </span>
                    ) : (
                      <ComplianceDocTypeBadge type={r.docType} />
                    )}
                  </div>
                </div>
                <ExpiryBadge expiryDate={r.date} />
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Compliance health + reviews */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-700 px-5 py-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-stone-500 dark:text-stone-400" />
              <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100">Compliance health</h2>
            </div>
            <Link href="/compliance" className="inline-flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors">View all <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="px-5 py-5">
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-3xl font-semibold text-stone-900 dark:text-stone-100">{validDocs}<span className="text-base font-normal text-stone-400 dark:text-stone-500"> / {d.totalDocs}</span></p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">documents valid</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/30 px-2.5 py-1 text-xs font-semibold text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-200 dark:ring-red-700">{d.expiredDocs} expired</span>
            </div>
            <div className="h-2 rounded-full bg-stone-100 dark:bg-stone-700 overflow-hidden">
              <div className="h-full rounded-full bg-red-500 transition-all" style={{ width: `${Math.round((validDocs / d.totalDocs) * 100)}%` }} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-700 px-5 py-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-stone-500 dark:text-stone-400" />
              <h2 className="text-sm font-semibold text-stone-900 dark:text-stone-100">Holiday let scores</h2>
            </div>
            <Link href="/reviews" className="inline-flex items-center gap-1 text-xs text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors">View all <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="px-5 py-8 text-center"><p className="text-sm text-stone-400 dark:text-stone-500">No holiday lets in this demo portfolio.</p></div>
        </div>
      </div>

      {/* Recent properties */}
      <div className="mt-6 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-sm overflow-hidden">
        <SectionHeader icon={Building2} title="Recently updated properties" href="/properties" />
        <div className="divide-y divide-stone-100 dark:divide-stone-700">
          {recentProperties.map((p) => (
            <Link key={p.id} href={`/properties/${p.id}`} className="flex items-center justify-between px-5 py-3.5 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
              <div>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{p.name}</p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">{[p.address_line_1, p.city].filter(Boolean).join(", ")}</p>
              </div>
              <div className="flex items-center gap-4">
                <StatusBadge status={p.status} />
                <span className="text-xs text-stone-400 dark:text-stone-500 hidden sm:block">{formatDate(p.updated_at)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
