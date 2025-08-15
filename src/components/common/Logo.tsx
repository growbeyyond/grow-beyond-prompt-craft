import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact'
}

export const Logo = ({ className, variant = 'full' }: LogoProps) => {
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      {/* Premium Logo Icon with Micro-Animations */}
      <div className="relative mr-3">
        {/* Main Logo Shape - Premium Diamond with Glow */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center shadow-premium group-hover:shadow-glow transition-all duration-500 hover-lift">
          <div className="w-6 h-6 bg-white rounded-lg transform rotate-45 relative group-hover:rotate-[60deg] transition-transform duration-700">
            <div className="absolute inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-sm group-hover:from-primary/50 group-hover:to-accent/50 transition-colors duration-300"></div>
            {/* Inner Sparkle */}
            <div className="absolute inset-2 bg-gradient-to-br from-white to-primary/20 rounded-xs opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        {/* Premium Status Indicator with Pulse */}
        <div className="absolute -top-1 -right-1 flex items-center justify-center">
          <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full pulse-glow flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse-premium"></div>
          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-primary/30 rounded-full float opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-accent/40 rounded-full float opacity-40 group-hover:opacity-80 transition-opacity duration-500" style={{ animationDelay: '1.2s' }}></div>
      </div>
      
      {/* Premium Logo Text with Enhanced Effects */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="text-2xl font-display font-black gradient-text leading-none tracking-tight group-hover:scale-105 transition-transform duration-500">
            Grow Beyyond
          </span>
          <span className="text-xs text-muted-foreground font-bold tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 group-hover:text-primary/80 transition-all duration-500">
            Digital Excellence
          </span>
        </div>
      )}
      
      {variant === 'compact' && (
        <span className="text-xl font-display font-black gradient-text group-hover:scale-105 transition-transform duration-500">
          Grow Beyyond
        </span>
      )}
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>
    </div>
  )
}