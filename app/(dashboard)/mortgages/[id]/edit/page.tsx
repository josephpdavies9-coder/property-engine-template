import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Edit Mortgage' }
export default function EditMortgagePage() {
  return <DemoReadOnly backHref="/mortgages" backLabel="Mortgages" />
}
