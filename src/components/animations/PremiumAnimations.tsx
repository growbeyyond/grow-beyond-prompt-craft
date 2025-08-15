import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

// Advanced Intersection Observer Hook
const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true)
        setHasAnimated(true)
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, options])

  return { elementRef, isVisible, hasAnimated }
}

// Premium Animation Wrapper
interface PremiumAnimationProps {
  children: React.ReactNode
  animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'rotate-in' | 'bounce-in' | 'fade-in' | 'zoom-bounce'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export const PremiumAnimation: React.FC<PremiumAnimationProps> = ({
  children,
  animation = 'slide-up',
  delay = 0,
  duration = 600,
  className,
  once = true
}) => {
  const { elementRef, isVisible } = useIntersectionObserver()

  const animationClasses = {
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'slide-left': 'animate-slide-left',
    'slide-right': 'animate-slide-right',
    'scale-in': 'animate-scale-in',
    'rotate-in': 'animate-rotate-in',
    'bounce-in': 'animate-bounce-in',
    'fade-in': 'animate-fade-in',
    'zoom-bounce': 'animate-zoom-bounce'
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-500',
        !isVisible && 'opacity-0 transform translate-y-8',
        isVisible && animationClasses[animation],
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  )
}

// Staggered Animation Container
interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number
  animation?: PremiumAnimationProps['animation']
  className?: string
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 100,
  animation = 'slide-up',
  className
}) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <PremiumAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </PremiumAnimation>
      ))}
    </div>
  )
}

// Magnetic Hover Effect
interface MagneticProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.3,
  className
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div
      ref={ref}
      className={cn('transition-transform duration-300 ease-out', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

// Floating Elements
interface FloatingElementProps {
  children: React.ReactNode
  intensity?: 'light' | 'medium' | 'strong'
  className?: string
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  intensity = 'medium',
  className
}) => {
  const intensityClasses = {
    light: 'animate-pulse',
    medium: 'animate-float',
    strong: 'animate-bounce-in'
  }

  return (
    <div className={cn(intensityClasses[intensity], className)}>
      {children}
    </div>
  )
}

// Particle Effect Background
export const ParticleBackground: React.FC<{ className?: string }> = ({ className }) => {
  const particles = Array.from({ length: 20 }, (_, i) => i)

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}

// Premium Reveal Text
interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export const RevealText: React.FC<RevealTextProps> = ({
  text,
  className,
  delay = 0
}) => {
  const { elementRef, isVisible } = useIntersectionObserver()
  const words = text.split(' ')

  return (
    <div ref={elementRef} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={cn(
            'inline-block transition-all duration-700 ease-out',
            !isVisible && 'opacity-0 transform translate-y-8',
            isVisible && 'opacity-100 transform translate-y-0'
          )}
          style={{
            transitionDelay: `${delay + index * 100}ms`
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  )
}