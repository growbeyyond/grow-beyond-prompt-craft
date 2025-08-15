import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { getTestimonialClients } from '@/lib/client-data'

export const TestimonialsSection = () => {
  const testimonials = getTestimonialClients()
  
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners across Hyderabad 
            are saying about their growth journey with Grow Beyyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border-border shadow-lg h-full">
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent mb-4 opacity-50" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Results highlight */}
                <div className="bg-accent/10 text-accent px-3 py-2 rounded-lg text-sm font-medium mb-6 inline-block">
                  ✨ {testimonial.results}
                </div>

                {/* Author info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-lg inline-block hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-display font-bold mb-4 gradient-text">
              Join 50+ Growing Businesses
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Ready to see similar results for your business? Let's start your growth story today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20like%20your%20other%20clients" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Start Your Success Story
              </a>
              <a 
                href="tel:+918886435551"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/30 text-foreground font-medium rounded-lg hover:bg-primary/10 transition-colors"
              >
                Call Now: +91 88864 35551
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}