import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Pause, Star } from 'lucide-react'

const videoTestimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    title: "Cardiologist",
    location: "Hyderabad",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=200&fit=crop",
    videoUrl: "#", // Placeholder for actual video
    duration: "2:30",
    results: "400% increase in appointments"
  },
  {
    id: 2,
    name: "Priya Mehta",
    title: "Founder, Elite Coaching",
    location: "Secunderabad", 
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b1d4?w=300&h=200&fit=crop",
    videoUrl: "#",
    duration: "1:45",
    results: "300+ new student enrollments"
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Real Estate Developer",
    location: "Gachibowli",
    rating: 5,
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop",
    videoUrl: "#",
    duration: "3:15",
    results: "250% increase in property sales"
  }
]

export const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  const handlePlay = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId)
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold mb-4">
            Success Stories <span className="gradient-text">On Video</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our clients about their growth journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="glass-card border-0 overflow-hidden group">
              <div className="relative">
                <img 
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-primary"
                    onClick={() => handlePlay(testimonial.id)}
                  >
                    {playingVideo === testimonial.id ? 
                      <Pause className="w-6 h-6" /> : 
                      <Play className="w-6 h-6 ml-1" />
                    }
                  </Button>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {testimonial.duration}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Results highlight */}
                <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium mb-4 inline-block">
                  ✨ {testimonial.results}
                </div>

                {/* Author info */}
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}