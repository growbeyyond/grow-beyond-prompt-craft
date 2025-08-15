import { useState, useEffect } from 'react'
import { MessageCircle, User } from 'lucide-react'

export const LiveChatIndicator = () => {
  const [isOnline, setIsOnline] = useState(true)
  const [activeUsers, setActiveUsers] = useState(3)

  useEffect(() => {
    // Simulate availability changes
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 5) + 2)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-24 right-4 z-40 md:bottom-6 md:right-20">
      <div className="glass-card px-4 py-3 rounded-2xl border border-primary/20 shadow-lg hover:scale-105 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-primary" />
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
          </div>
          
          <div className="text-sm">
            <div className="flex items-center gap-1 text-foreground font-medium">
              <User className="w-3 h-3" />
              <span>{activeUsers} agents online</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {isOnline ? 'Ready to help' : 'Will respond soon'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}