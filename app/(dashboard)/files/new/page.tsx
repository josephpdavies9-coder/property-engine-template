import { DemoReadOnly } from '@/components/demo/DemoReadOnly'
export const metadata = { title: 'Add File' }
export default function NewFilePage() {
  return <DemoReadOnly backHref="/files" backLabel="Files" />
}
