import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Monitor, Share2, Megaphone, Video, Search, Palette } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Websites",
    description: "Professional websites that convert visitors into customers",
    features: ["24-hour delivery", "Mobile responsive", "SEO optimized", "Lead forms integrated"],
    trending: false
  },
  {
    icon: Share2,
    title: "Instagram Reels & YouTube Shorts",
    description: "Viral video content for India's top social platforms",
    features: ["Instagram Reels", "YouTube Shorts", "Regional content", "Trending hashtags"],
    trending: true
  },
  {
    icon: Megaphone,
    title: "WhatsApp Business Automation",
    description: "Automated lead nurturing through India's #1 messaging platform",
    features: ["WhatsApp API", "Automated responses", "Lead qualification", "Broadcast campaigns"],
    trending: true
  },
  {
    icon: Video,
    title: "AI Chatbot Development",
    description: "Smart chatbots that handle customer queries 24/7",
    features: ["Multi-language support", "CRM integration", "Voice commands", "Learning algorithms"],
    trending: true
  },
  {
    icon: Search,
    title: "Hyderabad Local SEO",
    description: "Dominate local search results in Hyderabad and Telangana",
    features: ["Google My Business", "Local keywords", "Hyderabad directories", "Regional optimization"],
    trending: false
  },
  {
    icon: Palette,
    title: "Regional Language Content",
    description: "Content in Telugu, Hindi & English for maximum reach",
    features: ["Telugu copywriting", "Hindi translations", "Cultural adaptation", "Multi-language campaigns"],
    trending: true
  }
]

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Everything You Need to <span className="gradient-text">Grow Beyyond</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From websites to full-scale marketing campaigns, we provide all the tools 
            your business needs to thrive online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 border-0 relative">
                {service.trending && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      🔥 TRENDING
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}