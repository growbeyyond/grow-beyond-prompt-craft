import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact'
}

export const Logo = ({ className, variant = 'full' }: LogoProps) => {
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      {/* Clean Logo Icon */}
      <div className="relative mr-3">
        {/* Main Logo Shape - Professional Diamond */}
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center clean-shadow group-hover:scale-110 transition-all duration-300">
          <div className="w-5 h-5 bg-white rounded-lg transform rotate-45 relative">
            <div className="absolute inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-sm"></div>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="absolute -top-1 -right-1 flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Premium Logo Text */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="text-2xl font-display font-black gradient-text leading-none tracking-tight group-hover:scale-105 transition-transform duration-300">
            Grow Beyyond
          </span>
          <span className="text-xs text-muted-foreground font-bold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Digital Excellence
          </span>
        </div>
      )}
      
      {variant === 'compact' && (
        <span className="text-xl font-display font-black gradient-text group-hover:scale-105 transition-transform duration-300">
          Grow Beyyond
        </span>
      )}
    </div>
  )
}