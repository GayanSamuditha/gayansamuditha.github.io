import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gayan Samuditha - Masters Research in Biomedical and Health Informatics',
  description: 'Gayan is pursuing Masters Research in Biomedical and Health Informatics at Case Western Reserve University, School of Medicine. Research focuses on Large-scale Neuroimaging and Imaging Genomics of Alzheimer\'s Disease.',
  icons: {
    icon: '/img/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          <ClientLayout>{children}</ClientLayout>
        </main>
        <Footer />
      </body>
    </html>
  )
}

