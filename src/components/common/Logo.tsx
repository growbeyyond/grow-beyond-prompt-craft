import { cn } from '@/lib/utils'
import logoFull from '@/assets/grow-beyyond-logo.png'
import logoCompact from '@/assets/grow-beyyond-logo-compact.png'

interface LogoProps {
  className?: string
  variant?: 'full' | 'compact'
}

export const Logo = ({ className, variant = 'full' }: LogoProps) => {
  return (
    <div className={cn("flex items-center group cursor-pointer", className)}>
      {/* Professional Logo Image */}
      <div className="relative">
        <img 
          src={variant === 'full' ? logoFull : logoCompact}
          alt="GROW BEYYOND - Digital Growth Agency"
          className={cn(
            "object-contain transition-all duration-300 group-hover:scale-105",
            variant === 'full' ? "h-12 w-auto" : "h-8 w-auto"
          )}
        />
        
        {/* Subtle Growth Aura */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-lg"></div>
      </div>
    </div>
  )
}