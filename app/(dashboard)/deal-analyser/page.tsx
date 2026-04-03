import { PageHeader } from '@/components/shared/PageHeader'
import { DealAnalyser } from '@/components/deal-analyser/DealAnalyser'

export const metadata = { title: 'Deal Analyser' }

export default function DealAnalyserPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Deal Analyser"
        description="Model acquisition costs, bridge finance and returns before committing to a deal"
      />
      <DealAnalyser savedDeals={[]} />
    </div>
  )
}
