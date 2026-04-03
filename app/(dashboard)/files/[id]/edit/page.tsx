import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Edit File' }
export default function EditFilePage() {
  return <DemoReadOnly backHref="/files" backLabel="Files" />
}
