import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, X, Zap } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const StickyFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1000
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const message = "Hi! I saw your floating CTA and I'm interested in growing my business with Grow Beyyond. Let's discuss!"
    window.open(getWhatsAppUrl(message), '_blank')
  }

  if (!isVisible) return null

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500",
      isMinimized ? "scale-75" : "scale-100"
    )}>
      {!isMinimized ? (
        <div className="glass-card p-4 max-w-sm shadow-2xl border-0 animate-fade-in">
          <div className="flex items-start justify-between mb-3">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse">
              🟢 Online Now
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="h-6 w-6 p-0 hover:bg-transparent"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
          
          <div className="mb-4">
            <h3 className="font-display font-bold text-sm mb-1">
              Ready to <span className="gradient-text">Grow Beyyond?</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Get instant quotes & free consultation
            </p>
          </div>

          <Button 
            onClick={handleClick}
            className="w-full group text-sm py-2"
          >
            <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Start Free Consultation
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setIsMinimized(false)}
          size="lg"
          className="rounded-full w-14 h-14 p-0 group shadow-2xl animate-glow-pulse"
        >
          <Zap className="w-6 h-6 group-hover:animate-spin" />
        </Button>
      )}
    </div>
  )
}