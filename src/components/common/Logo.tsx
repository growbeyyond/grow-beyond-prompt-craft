import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact'
}

export const Logo = ({ className, variant = 'full' }: LogoProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      {/* Logo Icon/Symbol */}
      <div className="relative mr-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
          <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>
      
      {/* Logo Text */}
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="text-xl font-display font-bold gradient-text leading-none">
            Grow Beyyond
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wider">
            DIGITAL EXCELLENCE
          </span>
        </div>
      )}
      
      {variant === 'compact' && (
        <span className="text-lg font-display font-bold gradient-text">
          Grow Beyyond
        </span>
      )}
    </div>
  )
}