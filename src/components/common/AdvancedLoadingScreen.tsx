import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/common/Logo'
import { Progress } from '@/components/ui/progress'
import { Sparkles, Zap, TrendingUp } from 'lucide-react'

interface LoadingScreenProps {
  onComplete?: () => void
  minDuration?: number
}

export const AdvancedLoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDuration = 2000
}) => {
  const [progress, setProgress] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const stages = [
    { text: "Initializing Digital Excellence...", icon: Sparkles },
    { text: "Loading Premium Components...", icon: Zap },
    { text: "Preparing Your Growth Engine...", icon: TrendingUp },
    { text: "Ready to Grow Beyyond!", icon: Sparkles }
  ]

  useEffect(() => {
    const startTime = Date.now()
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const elapsed = Date.now() - startTime
        const targetProgress = Math.min((elapsed / minDuration) * 100, 100)
        
        // Update stage based on progress
        const stageIndex = Math.floor((targetProgress / 100) * (stages.length - 1))
        setCurrentStage(stageIndex)
        
        if (targetProgress >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setIsLoading(false)
            onComplete?.()
          }, 500)
        }
        
        return Math.min(prev + 2, targetProgress)
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [minDuration, onComplete, stages.length])

  const currentStageData = stages[currentStage]
  const StageIcon = currentStageData.icon

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center max-w-md px-8">
            {/* Logo with Premium Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <Logo className="justify-center scale-125" />
            </motion.div>

            {/* Stage Text with Icon */}
            <motion.div
              key={currentStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <StageIcon className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-lg font-medium text-muted-foreground">
                {currentStageData.text}
              </span>
            </motion.div>

            {/* Premium Progress Bar */}
            <div className="mb-8">
              <Progress 
                value={progress} 
                className="h-2 bg-muted"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-sm text-muted-foreground"
              >
                {Math.round(progress)}% Complete
              </motion.div>
            </div>

            {/* Floating Dots Animation */}
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>

          {/* Particle Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}