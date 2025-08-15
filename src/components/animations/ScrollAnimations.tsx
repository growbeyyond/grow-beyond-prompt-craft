import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in'
  delay?: number
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      case 'fade-in':
        return isVisible 
          ? 'opacity-100' 
          : 'opacity-0'
      case 'slide-in-left':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8'
      case 'slide-in-right':
        return isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'
      case 'scale-in':
        return isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'
      default:
        return isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

// Stagger children animations
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export const StaggerContainer = ({ 
  children, 
  className = '',
  staggerDelay = 100
}: StaggerContainerProps) => {
  return (
    <div className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <ScrollAnimation 
              key={index} 
              delay={index * staggerDelay}
              animation="fade-up"
            >
              {child}
            </ScrollAnimation>
          ))
        : children
      }
    </div>
  )
}