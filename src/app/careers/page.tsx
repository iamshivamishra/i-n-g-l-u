import type { Metadata } from 'next'
import Careers from '@/components/Careers'

export const metadata: Metadata = {
  title: 'Careers | INGLU',
}

export default function CareersPage() {
  return <Careers />
}
