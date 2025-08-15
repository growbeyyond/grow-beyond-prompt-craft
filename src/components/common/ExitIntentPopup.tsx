import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { X, Gift, Zap } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/constants'

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  const handleGetDiscount = () => {
    const message = `Hi! I'm interested in the 40% discount offer. My email: ${email}`
    window.open(getWhatsAppUrl(message), '_blank')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md glass-card border-0">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
              <Gift className="w-4 h-4 mr-1" />
              Limited Time Offer
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 hover:bg-transparent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogTitle className="text-2xl font-display font-bold gradient-text text-left">
            Wait! Don't Miss Out on 40% OFF
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl mb-2">🎯</div>
            <p className="text-muted-foreground">
              Get your <strong>FREE Business Growth Audit</strong> + 40% discount on your first project
            </p>
          </div>

          <div className="space-y-3">
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center"
            />
            <Button 
              onClick={handleGetDiscount}
              className="w-full text-lg py-6 group"
              disabled={!email}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Claim My 40% Discount
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>⏰ Offer expires in 24 hours</p>
            <p>📱 Get instant response on WhatsApp</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}