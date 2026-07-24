import type { Metadata } from 'next'
import Creators from '@/components/Creators'

export const metadata: Metadata = {
  title: 'Creators | INGLU',
}

export default function CreatorsPage() {
  return <Creators />
}
