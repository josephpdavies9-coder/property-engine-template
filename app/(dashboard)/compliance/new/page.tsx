import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Add Document' }
export default function NewCompliancePage() {
  return <DemoReadOnly backHref="/compliance" backLabel="Compliance" />
}
