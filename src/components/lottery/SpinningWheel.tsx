import { useState, useRef } from 'react'
import { Card } from '@/components/ui/card'

interface SpinningWheelProps {
  numbers: number[]
  selectedNumber?: number
  isSpinning: boolean
  onSpinComplete?: (number: number) => void
}

export const SpinningWheel = ({ numbers, selectedNumber, isSpinning, onSpinComplete }: SpinningWheelProps) => {
  const wheelRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState(0)

  const segmentAngle = 360 / numbers.length
  
  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--secondary))', 
    'hsl(var(--accent))',
    'hsl(var(--muted))'
  ]

  const handleSpin = () => {
    if (!isSpinning && onSpinComplete) {
      const randomIndex = Math.floor(Math.random() * numbers.length)
      const targetRotation = 360 * 6 + (randomIndex * segmentAngle)
      setRotation(targetRotation)
      
      setTimeout(() => {
        onSpinComplete(numbers[randomIndex])
      }, 4000)
    }
  }

  return (
    <Card className="relative w-80 h-80 p-4 flex items-center justify-center bg-card/50 backdrop-blur-sm">
      <div className="relative w-full h-full">
        {/* Wheel */}
        <div
          ref={wheelRef}
          className={`
            relative w-full h-full rounded-full border-4 border-primary
            transition-transform duration-[4000ms] ease-out transform-gpu
            ${isSpinning ? 'animate-wheel-spin' : ''}
          `}
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
          onClick={handleSpin}
        >
          {numbers.map((number, index) => (
            <div
              key={index}
              className="absolute w-full h-full"
              style={{
                transform: `rotate(${index * segmentAngle}deg)`,
              }}
            >
              {/* Segment */}
              <div
                className="absolute w-full h-1/2 origin-bottom transform-gpu"
                style={{
                  background: `conic-gradient(from 0deg, ${colors[index % colors.length]}, ${colors[(index + 1) % colors.length]})`
                }}
              >
                {/* Number */}
                <div
                  className="absolute text-white font-bold text-lg"
                  style={{
                    top: '20%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  {number}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10 shadow-lg" />
        
        {/* Pointer */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 z-20">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-primary" />
        </div>
      </div>
    </Card>
  )
}