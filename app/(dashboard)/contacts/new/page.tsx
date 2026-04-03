import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Add Contact' }
export default function NewContactPage() {
  return <DemoReadOnly backHref="/contacts" backLabel="Contacts" />
}
