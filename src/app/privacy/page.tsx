import type { Metadata } from 'next'
import Privacy from '@/components/Privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy | INGLU',
}

export default function PrivacyPage() {
  return <Privacy />
}
