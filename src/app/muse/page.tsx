import type { Metadata } from 'next'
import Muse from '@/components/Muse'

export const metadata: Metadata = {
  title: 'Muse | INGLU',
}

export default function MusePage() {
  return <Muse />
}
