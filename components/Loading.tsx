'use client'

import { useEffect, useState } from 'react'

export default function Loading() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return ''
        return prev + '.'
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xl font-semibold text-primary-600">Loading</span>
          <span className="text-xl font-semibold text-primary-600 w-4 text-left">{dots}</span>
        </div>
      </div>
    </div>
  )
}

