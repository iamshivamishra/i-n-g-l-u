import type { Metadata } from 'next'
import Students from '@/components/Students'

export const metadata: Metadata = {
  title: 'For Students | INGLU',
}

export default function StudentsPage() {
  return <Students />
}
