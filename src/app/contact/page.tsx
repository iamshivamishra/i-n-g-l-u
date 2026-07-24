import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact Us | INGLU',
}

export default function ContactPage() {
  return <Contact />
}
