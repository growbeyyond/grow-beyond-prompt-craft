import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact'
}

export const Logo = ({ className, variant = 'full' }: LogoProps) => {
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      {/* Nature-Tech Hybrid Logo */}
      <div className="relative mr-3">
        {/* Main Logo - Organic Leaf Shape with Tech Elements */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-all duration-500 hover-lift relative overflow-hidden">
          {/* Modern Tech Symbol */}
          <div className="w-8 h-8 relative transform group-hover:scale-110 transition-transform duration-500">
            {/* G Symbol with Growth Arrow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg font-bold">G</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full pulse-glow">
                <div className="absolute inset-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Animated Growth Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-green-400/20 animate-pulse"></div>
        </div>
        
        {/* Growth Indicator */}
        <div className="absolute -top-1 -right-1 flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full pulse-glow flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Floating Growth Elements */}
        <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-green-400/60 rounded-full float opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-1 -right-2 w-1 h-1 bg-emerald-400/40 rounded-full float opacity-40 group-hover:opacity-80 transition-opacity duration-500" style={{ animationDelay: '1.2s' }}></div>
      </div>
      
      {/* Premium Logo Text */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="text-2xl font-display font-black bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent leading-none tracking-tight group-hover:scale-105 transition-transform duration-500">
            GROW BEYYOND
          </span>
          <span className="text-xs text-muted-foreground font-bold tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 group-hover:text-green-600/80 transition-all duration-500">
            Digital Growth Agency
          </span>
        </div>
      )}
      
      {variant === 'compact' && (
        <span className="text-xl font-display font-black bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500">
          GROW BEYYOND
        </span>
      )}
      
      {/* Subtle Growth Aura */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-emerald-400/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>
    </div>
  )
}