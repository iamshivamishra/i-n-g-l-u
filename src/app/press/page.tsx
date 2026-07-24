import type { Metadata } from 'next'
import Press from '@/components/Press'

export const metadata: Metadata = {
  title: 'Press | INGLU',
}

export default function PressPage() {
  return <Press />
}
