import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Zap, Brain, Rocket, ArrowRight } from 'lucide-react'

const trendingTech = [
  {
    icon: Brain,
    name: "AI Integration",
    description: "ChatGPT, Claude, and custom AI models",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    name: "Automation",
    description: "No-code workflows and smart triggers",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Sparkles,
    name: "Voice Tech",
    description: "Voice assistants and speech recognition",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    name: "Performance",
    description: "Lightning-fast loading and PWA technology",
    color: "from-green-500 to-emerald-500"
  }
]

export const TrendingTechSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0">
            🚀 Future-Ready Technology
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Built with <span className="gradient-text">Tomorrow's Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just keep up with trends—we predict them. Our solutions use cutting-edge 
            technology that gives your business a competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trendingTech.map((tech, index) => {
            const Icon = tech.icon
            return (
              <Card key={index} className="group glass-card border-0 hover:scale-105 transition-all duration-500 text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 group">
            See Our Tech Stack
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
}