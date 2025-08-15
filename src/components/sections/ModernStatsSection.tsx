import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, Zap, Award } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    number: "300%",
    label: "Average ROI Increase",
    description: "Client revenue growth within 6 months",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    number: "50K+",
    label: "Leads Generated",
    description: "Quality leads delivered to clients",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    number: "24h",
    label: "Website Delivery",
    description: "From concept to live website",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Award,
    number: "98%",
    label: "Client Satisfaction",
    description: "Happy clients who refer others",
    color: "from-purple-500 to-pink-500"
  }
]

export const ModernStatsSection = () => {
  return (
    <section className="py-20 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0">
            📊 Proven Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Numbers That <span className="gradient-text">Speak Volumes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Real results for real businesses in Hyderabad and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border shadow-lg hover:scale-105 transition-all duration-500 text-center relative overflow-hidden">
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}