import React, { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface VideoHeroProps {
  videoUrl?: string
  posterUrl?: string
  title?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  videoUrl = "/placeholder-video.mp4",
  posterUrl = "/placeholder-poster.jpg",
  title = "Grow Beyyond Success Stories",
  className,
  autoPlay = true,
  muted = true
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(muted)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div 
      className={cn(
        "relative aspect-video rounded-2xl overflow-hidden shadow-premium group cursor-pointer",
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onClick={togglePlay}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterUrl}
        autoPlay={autoPlay}
        muted={muted}
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

      {/* Controls Overlay */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-all duration-300",
        showControls ? "bg-background/20" : "bg-transparent"
      )}>
        {/* Play/Pause Button */}
        <Button
          variant="outline"
          size="lg"
          className={cn(
            "w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 transition-all duration-300",
            showControls ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}
          onClick={(e) => {
            e.stopPropagation()
            togglePlay()
          }}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1" />
          )}
        </Button>
      </div>

      {/* Bottom Controls */}
      <div className={cn(
        "absolute bottom-4 left-4 right-4 flex items-center justify-between transition-all duration-300",
        showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      )}>
        {/* Title */}
        <div className="text-white">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-white/80">Watch our success stories</p>
        </div>

        {/* Volume Control */}
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
          onClick={(e) => {
            e.stopPropagation()
            toggleMute()
          }}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </Button>
      </div>

      {/* Premium Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    </div>
  )
}

// Video Testimonial Component
interface VideoTestimonialProps {
  name: string
  company: string
  testimonial: string
  videoUrl: string
  avatarUrl: string
  className?: string
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  name,
  company,
  testimonial,
  videoUrl,
  avatarUrl,
  className
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className={cn("glass-card p-6 hover:shadow-glow transition-all duration-500", className)}>
      {/* Video Container */}
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={avatarUrl}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-background/40 cursor-pointer group-hover:bg-background/30 transition-colors duration-300"
            onClick={handlePlay}
          >
            <Button
              variant="outline"
              size="lg"
              className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30"
            >
              <Play className="w-5 h-5 text-white ml-0.5" />
            </Button>
          </div>
        )}
      </div>

      {/* Testimonial Content */}
      <div className="space-y-3">
        <p className="text-muted-foreground italic">"{testimonial}"</p>
        <div className="flex items-center space-x-3">
          <img 
            src={avatarUrl} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </div>
    </div>
  )
}