import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Add Mortgage' }
export default function NewMortgagePage() {
  return <DemoReadOnly backHref="/mortgages" backLabel="Mortgages" />
}
