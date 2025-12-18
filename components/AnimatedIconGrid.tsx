'use client'

import { motion } from 'framer-motion'
import AnimatedIcon from './AnimatedIcon'

interface IconItem {
  src?: string
  videoSrc?: string
  alt: string
  label?: string
}

interface AnimatedIconGridProps {
  icons: IconItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function AnimatedIconGrid({ 
  icons, 
  columns = 4, 
  size = 'md',
  className = '' 
}: AnimatedIconGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5',
    6: 'grid-cols-3 md:grid-cols-6'
  }

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <AnimatedIcon
            src={icon.src}
            videoSrc={icon.videoSrc}
            alt={icon.alt}
            size={size}
            iconType={(icon as any).iconType}
          />
          {icon.label && (
            <p className="mt-2 text-xs text-center text-gray-600 font-medium">
              {icon.label}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  )
}

