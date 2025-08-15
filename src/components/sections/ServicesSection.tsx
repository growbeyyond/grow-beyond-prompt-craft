import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Monitor, Share2, Megaphone, Video, Search, Palette } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: "Websites",
    description: "Professional websites that convert visitors into customers",
    features: ["24-hour delivery", "Mobile responsive", "SEO optimized", "Lead forms integrated"]
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Content that builds your brand and engages your audience",
    features: ["Content strategy", "Daily posting", "Community engagement", "Brand consistency"]
  },
  {
    icon: Megaphone,
    title: "Paid Ads",
    description: "Targeted advertising campaigns that deliver real ROI",
    features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Performance tracking"]
  },
  {
    icon: Video,
    title: "Reels & Creative",
    description: "Video content that captures attention and drives engagement",
    features: ["Short-form videos", "Product showcases", "Brand storytelling", "Viral content"]
  },
  {
    icon: Search,
    title: "SEO",
    description: "Get found by customers searching for your services",
    features: ["Local SEO", "Keyword optimization", "Content strategy", "Technical SEO"]
  },
  {
    icon: Palette,
    title: "Creative Production",
    description: "Professional designs that make your brand stand out",
    features: ["Logo design", "Brand identity", "Marketing materials", "Digital assets"]
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
              <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 border-0">
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