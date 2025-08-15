import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, TrendingUp, UserPlus } from 'lucide-react'
import { cn } from '@/lib/utils'

const notifications = [
  {
    type: 'signup',
    message: 'Dr. Priya from Banjara Hills just booked a consultation',
    time: '2 minutes ago',
    icon: UserPlus,
    color: 'from-green-500 to-emerald-500'
  },
  {
    type: 'success',
    message: 'TechFlow Solutions achieved 400% ROI increase',
    time: '5 minutes ago', 
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    type: 'completion',
    message: 'Elite Fitness website launched successfully',
    time: '12 minutes ago',
    icon: CheckCircle,
    color: 'from-purple-500 to-pink-500'
  },
  {
    type: 'signup',
    message: 'Restaurant owner from Kondapur started free trial',
    time: '18 minutes ago',
    icon: UserPlus,
    color: 'from-orange-500 to-red-500'
  },
  {
    type: 'success',
    message: 'Golden Spoon increased online orders by 350%',
    time: '25 minutes ago',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  }
]

export const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const notification = notifications[currentNotification]
  const Icon = notification.icon

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <Card className={cn(
        "p-4 glass-card border-0 transition-all duration-300",
        isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"
      )}>
        <div className="flex items-start gap-3">
          <div className={`w-10 h-10 bg-gradient-to-r ${notification.color} rounded-full flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground leading-tight">
              {notification.message}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                🔴 Live
              </Badge>
              <span className="text-xs text-muted-foreground">
                {notification.time}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}