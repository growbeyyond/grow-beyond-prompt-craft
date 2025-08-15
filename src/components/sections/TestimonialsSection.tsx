import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    title: "Cardiologist",
    location: "Hyderabad",
    rating: 5,
    text: "Grow Beyyond transformed my practice completely. Within 2 months, my patient appointments increased by 400%. Their team understood exactly what I needed and delivered beyond expectations.",
    results: "400% increase in appointments",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Priya Mehta",
    title: "Founder, Elite Coaching",
    location: "Secunderabad",
    rating: 5,
    text: "The website and Google Ads campaign they created helped us enroll 300+ new students in just 4 months. The lead quality is excellent and the ROI is fantastic.",
    results: "300+ new student enrollments",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d4?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Amit Patel",
    title: "Real Estate Developer", 
    location: "Gachibowli",
    rating: 5,
    text: "Our property sales increased by 250% after launching the new website. The automated lead system they built saves us 10+ hours per week and converts much better.",
    results: "250% increase in property sales",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Sunita Gupta",
    title: "Wellness Center Owner",
    location: "Kondapur",
    rating: 5,
    text: "The social media strategy and website redesign brought us 200+ new members in 3 months. Their team is professional, responsive, and truly cares about results.",
    results: "200+ new wellness members",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Vikram Singh",
    title: "CA Firm Partner",
    location: "Jubilee Hills",
    rating: 5,
    text: "Their B2B lead generation system is incredible. We now get 50+ qualified business inquiries every month. The quality of leads has improved dramatically.",
    results: "50+ qualified B2B leads monthly",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Neha Agarwal",
    title: "Fashion Boutique Owner",
    location: "Banjara Hills",
    rating: 5,
    text: "The e-commerce website they built increased our online sales by 300%. The design is beautiful and the checkout process is so smooth. Highly recommend!",
    results: "300% increase in online sales",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face"
  }
]

export const TestimonialsSection = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners across India 
            are saying about their growth journey with Grow Beyyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-glass-border h-full">
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
                  "{testimonial.text}"
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
          <div className="glass-card p-8 rounded-2xl border border-primary/20 inline-block hover:scale-105 transition-transform duration-300">
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