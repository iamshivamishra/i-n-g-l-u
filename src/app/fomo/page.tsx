import type { Metadata } from 'next'
import Fomo from '@/components/Fomo'

export const metadata: Metadata = {
  title: 'FOMO | INGLU',
}

export default function FomoPage() {
  return <Fomo />
}
