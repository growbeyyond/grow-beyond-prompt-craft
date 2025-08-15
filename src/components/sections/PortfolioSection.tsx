import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'
import { getPortfolioClients } from '@/lib/client-data'

export const PortfolioSection = () => {
  const portfolioItems = getPortfolioClients()
  
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
          {portfolioItems.map((item) => (
            <Card key={item.id} className="glass-card border-0 overflow-hidden group hover:scale-105 hover:shadow-2xl transition-all duration-500 relative">
              {/* Premium Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.projectImage} 
                    alt={item.projectTitle}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full shadow-lg">
                      {item.industry}
                    </span>
                  </div>
                  
                  {/* Live Site Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                  {item.projectTitle}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {item.projectDescription}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Enhanced Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                    <Users className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-bold text-primary">{item.projectMetrics?.leads}</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                    <TrendingUp className="w-5 h-5 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-bold text-accent">{item.projectMetrics?.growth}</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all duration-300">
                    <Clock className="w-5 h-5 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-bold text-secondary">{item.projectMetrics?.time}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    className="flex-1 group/btn"
                    onClick={() => window.open(item.projectUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Live Site
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(`/case-study/${item.projectTitle?.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                    className="group-hover:border-primary group-hover:text-primary transition-colors"
                  >
                    Case Study
                  </Button>
                </div>
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