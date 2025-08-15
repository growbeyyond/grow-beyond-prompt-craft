import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Monitor, Share2, Megaphone, Video, Search, Palette, Zap, Brain, Smartphone, TrendingUp, MessageCircle, Mic } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Lightning Fast Websites",
    description: "AI-powered websites that convert visitors into customers in 24 hours",
    features: ["24-hour deployment", "PWA technology", "Core Web Vitals optimized", "Smart lead capture"],
    trending: false,
    category: "Web Development",
    price: "₹12,000"
  },
  {
    icon: Share2,
    title: "Viral Content Engine",
    description: "Instagram Reels, YouTube Shorts & TikTok content that goes viral",
    features: ["Instagram Reels", "YouTube Shorts", "TikTok marketing", "Viral trend analysis"],
    trending: true,
    category: "Social Media",
    price: "₹8,000/month"
  },
  {
    icon: Brain,
    title: "AI Chatbot Solutions",
    description: "GPT-powered chatbots with voice recognition and sentiment analysis",
    features: ["ChatGPT integration", "Voice commands", "Sentiment analysis", "Multilingual support"],
    trending: true,
    category: "AI Technology",
    price: "₹15,000"
  },
  {
    icon: Megaphone,
    title: "WhatsApp Automation Pro",
    description: "Advanced WhatsApp Business API with AI-powered responses",
    features: ["WhatsApp Business API", "AI auto-responses", "Lead scoring", "Broadcast automation"],
    trending: true,
    category: "Marketing Automation",
    price: "₹5,000/month"
  },
  {
    icon: Mic,
    title: "Voice Search Optimization",
    description: "Optimize for Alexa, Google Assistant & voice queries in regional languages",
    features: ["Voice SEO", "Smart speakers", "Regional voice queries", "Featured snippets"],
    trending: true,
    category: "SEO Innovation",
    price: "₹10,000"
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "App-like experiences that work offline and load instantly",
    features: ["Offline functionality", "Push notifications", "App store deployment", "Lightning fast"],
    trending: true,
    category: "App Development",
    price: "₹25,000"
  },
  {
    icon: TrendingUp,
    title: "Influencer Growth Hacking",
    description: "Connect with micro-influencers and viral marketing strategies",
    features: ["Micro-influencer network", "Viral campaigns", "Growth analytics", "ROI tracking"],
    trending: true,
    category: "Growth Marketing",
    price: "₹20,000/month"
  },
  {
    icon: Zap,
    title: "Marketing Automation Suite",
    description: "End-to-end automation from leads to customer retention",
    features: ["Email sequences", "SMS automation", "Retargeting ads", "Customer journey mapping"],
    trending: true,
    category: "MarTech",
    price: "₹12,000/month"
  },
  {
    icon: Search,
    title: "Hyderabad Domination SEO",
    description: "Local SEO with AI-powered keyword research and Google My Business optimization",
    features: ["Google My Business Pro", "Local keyword dominance", "Review management", "Map optimization"],
    trending: false,
    category: "Local SEO",
    price: "₹8,000/month"
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
              <Card key={index} className="group glass-card hover:scale-105 hover:shadow-2xl transition-all duration-500 border-0 relative overflow-hidden cursor-pointer">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Trending Badge */}
                {service.trending && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold animate-pulse border-0">
                      🔥 TRENDING
                    </Badge>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                </div>

                <CardHeader className="pt-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/80 to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm group-hover:text-foreground transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Price Display */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Starting at</span>
                      <span className="text-lg font-bold gradient-text">{service.price}</span>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-500 pointer-events-none" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}