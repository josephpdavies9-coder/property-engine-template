import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Edit Document' }
export default function EditCompliancePage() {
  return <DemoReadOnly backHref="/compliance" backLabel="Compliance" />
}
