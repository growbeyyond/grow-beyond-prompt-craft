import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'

const portfolioItems = [
  {
    title: "Dr. Sharma's Clinic",
    category: "Healthcare",
    description: "Complete digital transformation with website, Google Ads, and patient booking system. 300% increase in appointments.",
    metrics: {
      leads: "400+ Monthly Leads",
      growth: "300% Growth",
      time: "2 Weeks Setup"
    },
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    url: "#"
  },
  {
    title: "Elite Coaching Institute",
    category: "Education",
    description: "Student enrollment system with automated lead nurturing. Increased admissions by 250% in 6 months.",
    metrics: {
      leads: "600+ Student Inquiries",
      growth: "250% Admissions",
      time: "3 Weeks Launch"
    },
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    url: "#"
  },
  {
    title: "Premium Properties",
    category: "Real Estate",
    description: "Property showcase website with advanced filtering and WhatsApp integration. Generated ₹2Cr+ in sales.",
    metrics: {
      leads: "200+ Quality Leads",
      growth: "₹2Cr+ Sales",
      time: "4 Weeks Live"
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    url: "#"
  },
  {
    title: "Wellness Center Chain",
    category: "Wellness",
    description: "Multi-location booking system with membership management. 180% increase in member signups.",
    metrics: {
      leads: "500+ Memberships",
      growth: "180% Signups",
      time: "5 Weeks Deploy"
    },
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    url: "#"
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

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Case Study <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}