import type { Metadata } from 'next'
import Terms from '@/components/Terms'

export const metadata: Metadata = {
  title: 'Terms & Conditions | INGLU',
}

export default function TermsPage() {
  return <Terms />
}
