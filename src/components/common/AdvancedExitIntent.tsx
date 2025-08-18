import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Clock, Users, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ExitIntentPopupProps {
  onClose?: () => void
  onConvert?: () => void
}

export const AdvancedExitIntent: React.FC<ExitIntentPopupProps> = ({
  onClose,
  onConvert
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(600) // 10 minutes

  useEffect(() => {
    let mouseLeaveBoundary = 5 // pixels from top of screen

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= mouseLeaveBoundary && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 70 && !hasShown) {
        setTimeout(() => {
          setIsVisible(true)
          setHasShown(true)
        }, 3000) // Show after 3 seconds on 70% scroll
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasShown])

  // Countdown timer
  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isVisible])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  const handleConvert = () => {
    setIsVisible(false)
    onConvert?.()
    // Redirect to WhatsApp or booking page
    window.open('https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20claim%20the%20exclusive%20₹25%2C000%20discount%20offer!', '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <Card className="glass-card-premium max-w-lg w-full relative overflow-hidden">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 hover:bg-white/10"
                onClick={handleClose}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-tertiary/20 to-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

              <CardContent className="p-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow"
                  >
                    <Gift className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <Badge variant="secondary" className="mb-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Exclusive Offer
                  </Badge>
                  
                  <h2 className="text-2xl font-display font-bold gradient-text mb-2">
                    Wait! Don't Leave Empty Handed
                  </h2>
                  
                  <p className="text-muted-foreground">
                    Get exclusive access to our premium growth package
                  </p>
                </div>

                {/* Offer Details */}
                <div className="glass-card p-6 mb-6 border border-primary/30">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-accent mb-1">₹25,000 OFF</div>
                    <div className="text-sm text-muted-foreground line-through">Regular Price: ₹65,000</div>
                    <div className="text-lg font-semibold text-primary">Your Price: ₹40,000</div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Complete website in 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>FREE Google Ads setup (₹25,000 value)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-tertiary rounded-full"></div>
                      <span>3 months FREE maintenance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Lead generation automation</span>
                    </div>
                  </div>
                </div>

                {/* Urgency Timer */}
                <div className="flex items-center justify-center gap-2 mb-6 p-3 glass-card border border-accent/30">
                  <Clock className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-sm font-medium">Offer expires in:</span>
                  <span className="text-lg font-bold text-accent font-mono">
                    {formatTime(timeRemaining)}
                  </span>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>50+ businesses served</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    <span>300% avg. growth</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleConvert}
                    className="w-full btn-premium text-lg py-6 font-semibold group"
                  >
                    Claim This Exclusive Offer
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="w-full border-muted-foreground/20 hover:bg-muted/20"
                  >
                    Maybe Later
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="text-center mt-4 text-xs text-muted-foreground">
                  ✅ No hidden charges • ✅ 100% satisfaction guarantee • ✅ 24/7 support
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}