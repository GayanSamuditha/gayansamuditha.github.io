import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import ClientLayout from '@/components/ClientLayout'

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
      <body>
        <Navbar />
        <main>
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  )
}

