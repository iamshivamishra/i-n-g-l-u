import type { Metadata } from 'next'
import Ecosystem from '@/components/Ecosystem'

export const metadata: Metadata = {
  title: 'Ecosystem | INGLU',
}

export default function EcosystemPage() {
  return <Ecosystem />
}
