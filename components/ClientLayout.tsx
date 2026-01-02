'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Loading from './Loading'
import PageTransition from './PageTransition'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Show loading briefly on route change
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [pathname])

  if (isLoading) {
    return <Loading />
  }

  return <PageTransition>{children}</PageTransition>
}



