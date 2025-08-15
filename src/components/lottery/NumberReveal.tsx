import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'

interface NumberRevealProps {
  number: number
  index: number
  isRevealed: boolean
  delay?: number
}

export const NumberReveal = ({ number, index, isRevealed, delay = 0 }: NumberRevealProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => {
        setShouldAnimate(true)
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [isRevealed, delay])

  return (
    <Card className={`
      relative w-16 h-16 flex items-center justify-center
      border-2 border-primary/20 bg-card/50 backdrop-blur-sm
      transition-all duration-300 transform-gpu
      ${shouldAnimate ? 'animate-number-reveal animate-clean-pulse' : 'opacity-0 scale-75'}
      ${isRevealed ? 'border-primary clean-shadow' : ''}
    `}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg" />
      
      <span className={`
        text-2xl font-bold relative z-10 transition-all duration-300
        ${shouldAnimate ? 'text-primary' : 'text-muted-foreground'}
      `}>
        {shouldAnimate ? number.toString().padStart(2, '0') : '?'}
      </span>
      
      {/* Particle effect overlay */}
      {shouldAnimate && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`
                absolute w-1 h-1 bg-primary rounded-full
                animate-confetti-fall opacity-60
              `}
              style={{
                left: `${20 + i * 10}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1.5 + Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      )}
    </Card>
  )
}