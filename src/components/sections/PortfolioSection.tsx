import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'

const portfolioItems = [
  {
    title: "Dr. Sindhu Pericherla - OncoCore",
    category: "Healthcare",
    description: "Complete digital presence for leading oncologist in Hyderabad. Professional website with appointment booking and patient education resources.",
    metrics: {
      leads: "200+ Patient Inquiries",
      growth: "300% Online Presence",
      time: "2 Weeks Launch"
    },
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    url: "https://drsindhupericherlaonco.in/"
  },
  {
    title: "Dr. Namratha Sai Reddy - Gynecology",
    category: "Healthcare", 
    description: "Modern medical website with advanced booking system and patient portal. Enhanced digital credibility for women's healthcare specialist.",
    metrics: {
      leads: "150+ Appointments",
      growth: "250% Digital Reach",
      time: "3 Weeks Live"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    url: "https://drnamrathasaireddy.in/"
  },
  {
    title: "Footryx Clinics - Podiatry Chain",
    category: "Healthcare",
    description: "Multi-location podiatry clinic website with service showcase and appointment management. Comprehensive foot care solutions.",
    metrics: {
      leads: "300+ New Patients", 
      growth: "400% Website Traffic",
      time: "4 Weeks Complete"
    },
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
    url: "https://footryxclinics.com/"
  },
  {
    title: "Astro Today - Astrology Platform",
    category: "Spiritual Services",
    description: "Complete astrology platform with consultation booking, horoscope services, and content management. Modern approach to traditional services.",
    metrics: {
      leads: "500+ Consultations",
      growth: "350% Online Bookings", 
      time: "6 Weeks Platform"
    },
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    url: "https://astrotoday.net/"
  }
]

export const PortfolioSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped companies across industries 
            achieve dramatic growth through strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="glass-card border-glass-border overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="w-5 h-5 text-accent mx-auto mb-1" />
                    <p className="text-sm font-medium">{item.metrics.leads}</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
                    <p className="text-sm font-medium">{item.metrics.growth}</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-accent mx-auto mb-1" />
                    <p className="text-sm font-medium">{item.metrics.time}</p>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(item.url, '_blank')}
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  View Live Site <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('/portfolio', '_self')}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}