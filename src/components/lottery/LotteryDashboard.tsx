import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Scene3D } from '@/components/3d/Scene3D'
import { LotteryDrum } from '@/components/3d/LotteryDrum'
import { LotteryBall } from '@/components/3d/LotteryBall'
import { NumberReveal } from './NumberReveal'
import { SpinningWheel } from './SpinningWheel'
import { Play, RotateCcw, Trophy } from 'lucide-react'

export const LotteryDashboard = () => {
  const [isDrawing, setIsDrawing] = useState(false)
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [selectedBalls, setSelectedBalls] = useState<Set<number>>(new Set())
  const [wheelNumber, setWheelNumber] = useState<number | undefined>()
  
  const allNumbers = Array.from({ length: 49 }, (_, i) => i + 1)
  const wheelNumbers = Array.from({ length: 12 }, (_, i) => i + 1)

  const startLotteryDraw = useCallback(() => {
    if (isDrawing) return
    
    setIsDrawing(true)
    setDrawnNumbers([])
    setSelectedBalls(new Set())
    setWheelNumber(undefined)
    
    // Simulate drawing 6 numbers with delays
    const drawNumbers = async () => {
      const available = [...allNumbers]
      const results: number[] = []
      
      for (let i = 0; i < 6; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const randomIndex = Math.floor(Math.random() * available.length)
        const drawnNumber = available.splice(randomIndex, 1)[0]
        results.push(drawnNumber)
        
        setDrawnNumbers([...results])
        setSelectedBalls(prev => new Set([...prev, drawnNumber]))
      }
      
      setTimeout(() => {
        setIsDrawing(false)
      }, 2000)
    }
    
    drawNumbers()
  }, [isDrawing, allNumbers])

  const resetLottery = () => {
    setDrawnNumbers([])
    setSelectedBalls(new Set())
    setWheelNumber(undefined)
    setIsDrawing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            3D Lottery Experience
          </h1>
          <p className="text-muted-foreground text-lg">
            Experience the thrill of lottery with stunning 3D animations
          </p>
        </div>

        {/* Main 3D Scene */}
        <Card className="relative h-96 bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
          <Scene3D>
            <LotteryDrum isSpinning={isDrawing} numbers={allNumbers} />
            
            {/* 3D Lottery Balls */}
            {allNumbers.slice(0, 20).map((number, index) => (
              <LotteryBall
                key={number}
                number={number}
                position={[
                  (Math.cos((index / 20) * Math.PI * 2) * 5),
                  Math.sin(index * 0.3) * 2,
                  (Math.sin((index / 20) * Math.PI * 2) * 5)
                ]}
                isSelected={selectedBalls.has(number)}
                animationDelay={index * 100}
              />
            ))}
          </Scene3D>
          
          {/* Controls overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <Button 
              onClick={startLotteryDraw}
              disabled={isDrawing}
              size="lg"
              className="bg-primary/90 backdrop-blur-sm hover:bg-primary"
            >
              <Play className="w-4 h-4 mr-2" />
              {isDrawing ? 'Drawing...' : 'Start Draw'}
            </Button>
            
            <Button 
              onClick={resetLottery}
              variant="outline"
              size="lg"
              className="bg-card/90 backdrop-blur-sm"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Results Display */}
          <Card className="p-6 space-y-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Winning Numbers</h2>
            </div>
            
            <div className="grid grid-cols-6 gap-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <NumberReveal
                  key={index}
                  number={drawnNumbers[index] || 0}
                  index={index}
                  isRevealed={index < drawnNumbers.length}
                  delay={index * 300}
                />
              ))}
            </div>
            
            {drawnNumbers.length === 6 && (
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-primary font-semibold">🎉 Draw Complete! 🎉</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Numbers: {drawnNumbers.join(', ')}
                </p>
              </div>
            )}
          </Card>

          {/* Spinning Wheel */}
          <Card className="p-6 space-y-4 bg-card/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-center">Bonus Wheel</h2>
            
            <div className="flex justify-center">
              <SpinningWheel
                numbers={wheelNumbers}
                selectedNumber={wheelNumber}
                isSpinning={false}
                onSpinComplete={setWheelNumber}
              />
            </div>
            
            {wheelNumber && (
              <div className="text-center p-3 bg-accent/20 rounded-lg">
                <p className="font-semibold text-accent-foreground">
                  Bonus Number: {wheelNumber}
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}