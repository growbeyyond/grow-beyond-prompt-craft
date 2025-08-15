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
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-400 to-teal-500 flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-all duration-500 hover-lift relative overflow-hidden">
          {/* Leaf Shape */}
          <div className="w-7 h-7 bg-white/90 rounded-full relative transform group-hover:scale-110 transition-transform duration-500">
            {/* Organic Pattern */}
            <div className="absolute inset-1 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full"></div>
            {/* Tech Circuit Lines */}
            <div className="absolute inset-2 border border-green-400/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
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