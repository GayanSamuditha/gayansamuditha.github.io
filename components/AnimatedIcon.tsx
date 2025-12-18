'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ReactNode, useState } from 'react'

interface AnimatedIconProps {
  src?: string
  videoSrc?: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
  loop?: boolean
  autoplay?: boolean
  fallback?: ReactNode
  iconType?: 'brain' | 'dna' | 'ai' | 'llm' | 'python' | 'pytorch' | 'tensorflow' | 'ants' | 'default'
}

export default function AnimatedIcon({ 
  src, 
  videoSrc, 
  alt, 
  size = 'md', 
  className = '',
  children,
  loop = true,
  autoplay = true,
  fallback,
  iconType = 'default'
}: AnimatedIconProps) {
  const [hasError, setHasError] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }

  const iconSizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  }

  // Emoji/Icon fallbacks based on type
  const getFallbackIcon = () => {
    const iconMap: Record<string, string> = {
      brain: '🧠',
      dna: '🧬',
      ai: '🤖',
      llm: '💬',
      python: '🐍',
      pytorch: '🔥',
      tensorflow: '⚡',
      ants: '🔬',
      default: '⚙️'
    }
    return iconMap[iconType] || iconMap.default
  }

  const handleError = () => {
    setHasError(true)
    setShowFallback(true)
  }

  const handleLoad = () => {
    setShowFallback(false)
    setHasError(false)
  }

  // Show fallback immediately if no src provided, or after error
  const shouldShowFallback = (!src && !videoSrc) || showFallback

  const FallbackIcon = () => (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg border-2 border-primary-200 shadow-sm`}
      whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {fallback || children || (
        <motion.span 
          className={iconSizeClasses[size]}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {getFallbackIcon()}
        </motion.span>
      )}
    </motion.div>
  )

  if (shouldShowFallback) {
    return <FallbackIcon />
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {videoSrc ? (
        <video
          autoPlay={autoplay}
          loop={loop}
          muted
          playsInline
          className="w-full h-full object-contain"
          onError={handleError}
          onLoadedData={handleLoad}
        >
          <source src={videoSrc} type="video/mp4" />
          {src && (
            <Image 
              src={src} 
              alt={alt} 
              fill 
              className="object-contain"
              onError={handleError}
              onLoad={handleLoad}
              unoptimized
            />
          )}
        </video>
      ) : src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          unoptimized
          onError={handleError}
          onLoad={handleLoad}
        />
      ) : (
        <FallbackIcon />
      )}
    </motion.div>
  )
}

