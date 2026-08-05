import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/Pagetransition'
import { AuthProvider } from '@/context/AuthContext'
import ToastContainer from '@/components/Toast'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "INGLU — India's Fastest Growing Global Youth Community",
  description:
    "INGLU is India's fastest growing global youth community — connecting students, creators, artists, colleges and brands through internships, events and opportunity.",
  metadataBase: new URL('https://www.inglu.in'),
  openGraph: {
    title: "INGLU — India's Fastest Growing Global Youth Community",
    description:
      "INGLU is India's fastest growing global youth community — connecting students, creators, artists, colleges and brands through internships, events and opportunity.",
    siteName: 'INGLU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "INGLU — India's Fastest Growing Global Youth Community",
    description:
      "INGLU is India's fastest growing global youth community.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <AuthProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  )
}