import type { Metadata } from 'next'
import Grid from '@/components/Grid'

export const metadata: Metadata = {
  title: 'Grid | INGLU',
}

export default function GridPage() {
  return <Grid />
}
