import type { Metadata } from 'next'
import CampusBuzz from '@/components/CampusBuzz'

export const metadata: Metadata = {
  title: 'Campus Buzz | INGLU',
}

export default function CampusBuzzPage() {
  return <CampusBuzz />
}
