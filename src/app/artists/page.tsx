import type { Metadata } from 'next'
import Artists from '@/components/Artists'

export const metadata: Metadata = {
  title: 'Artists | INGLU',
}

export default function ArtistsPage() {
  return <Artists />
}
