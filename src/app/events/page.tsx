import type { Metadata } from 'next'
import Events from '@/components/Events'

export const metadata: Metadata = {
  title: 'Events | INGLU',
}

export default function EventsPage() {
  return <Events />
}
