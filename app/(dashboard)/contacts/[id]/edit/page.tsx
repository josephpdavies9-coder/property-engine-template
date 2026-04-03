import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Edit Contact' }
export default function EditContactPage() {
  return <DemoReadOnly backHref="/contacts" backLabel="Contacts" />
}
