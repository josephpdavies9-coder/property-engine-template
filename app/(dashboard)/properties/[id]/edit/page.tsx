import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Edit Property' }
export default function EditPropertyPage() {
  return <DemoReadOnly backHref="/properties" backLabel="Properties" />
}
