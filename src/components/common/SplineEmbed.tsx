import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface SplineEmbedProps {
  src: string
  width?: string | number
  height?: string | number
  className?: string
  title?: string
}

export const SplineEmbed = ({ 
  src, 
  width = "100%", 
  height = 560, 
  className = "",
  title = "3D Scene"
}: SplineEmbedProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted rounded-2xl ${className}`}
        style={{ height }}
      >
        <div className="text-center text-muted-foreground">
          <p>3D scene temporarily unavailable</p>
          <p className="text-sm">Please refresh to try again</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-muted rounded-2xl z-10"
          style={{ height }}
        >
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 0, borderRadius: '1rem' }}
        title={title}
        allow="fullscreen; xr-spatial-tracking"
        onLoad={handleLoad}
        onError={handleError}
        className="w-full"
      />
    </div>
  )
}