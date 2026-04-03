import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Add Property' }
export default function NewPropertyPage() {
  return <DemoReadOnly backHref="/properties" backLabel="Properties" />
}
