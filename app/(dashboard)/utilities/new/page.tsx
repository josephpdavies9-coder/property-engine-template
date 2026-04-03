import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Add Utility' }
export default function NewUtilityPage() {
  return <DemoReadOnly backHref="/utilities" backLabel="Utilities" />
}
