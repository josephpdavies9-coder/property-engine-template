import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Edit Utility' }
export default function EditUtilityPage() {
  return <DemoReadOnly backHref="/utilities" backLabel="Utilities" />
}
