import type { Metadata } from 'next'
import CaseStudies from '@/components/CaseStudies'

export const metadata: Metadata = {
  title: 'Case Studies | INGLU',
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}
