import type { Metadata } from 'next'
import Colleges from '@/components/Colleges'

export const metadata: Metadata = {
  title: 'Colleges | INGLU',
}

export default function CollegesPage() {
  return <Colleges />
}
