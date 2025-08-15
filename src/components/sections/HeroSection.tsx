import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Users, Award, Play, Sparkles } from 'lucide-react'
import { ScrollAnimation } from '@/components/animations/ScrollAnimations'
import { Link } from 'react-router-dom'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollAnimation animation="fade-up" className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-4 py-2 mb-6 group hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                #1 Digital Agency in Hyderabad
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Transform Your Business</span>
              <br />
              <span className="text-4xl lg:text-6xl">Into a Digital Empire</span>
              <br />
              <span className="text-3xl lg:text-5xl text-muted-foreground">in Just 24 Hours</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              We don't just build websites—we create <strong className="text-primary">digital experiences</strong> that convert visitors into paying customers. 
              From AI-powered websites to viral marketing campaigns, we've helped <strong className="text-accent">50+ businesses</strong> grow beyond their wildest dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-6 group shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                <Sparkles className="mr-2 w-5 h-5 group-hover:animate-spin" />
                Start Your Empire <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 group border-2 border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary/60 transition-all duration-300">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  See Success Stories
                </Button>
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="bg-card/50 backdrop-blur-sm p-6 hover:scale-105 transition-transform duration-300 border border-border rounded-2xl shadow-lg">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2 group">
                  <Award className="w-4 h-4 text-accent group-hover:animate-pulse" />
                  <span className="font-medium">50+ Digital Empires Built</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Users className="w-4 h-4 text-accent group-hover:animate-pulse" />
                  <span className="font-medium">Healthcare • Real Estate • Education • Wellness</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Clock className="w-4 h-4 text-accent group-hover:animate-pulse" />
                  <span className="font-medium">300% Avg. Revenue Growth</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Interactive Success Showcase */}
          <ScrollAnimation animation="slide-in-left" delay={0.3} className="relative">
            <div className="relative h-[600px] bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
              {/* Floating Animation Background */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-6 max-w-md">
                  <ScrollAnimation animation="scale-in" delay={0.6}>
                    <div className="bg-card/50 backdrop-blur-sm p-6 text-center hover:scale-110 hover:rotate-3 transition-all duration-500 border border-primary/20 shadow-xl group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:animate-pulse shadow-lg">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <p className="text-sm font-bold text-foreground gradient-text">AI Websites</p>
                      <p className="text-xs text-accent font-medium mt-1">24h Empire Launch</p>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="scale-in" delay={0.8}>
                    <div className="bg-card/50 backdrop-blur-sm p-6 text-center hover:scale-110 hover:-rotate-3 transition-all duration-500 border border-accent/20 shadow-xl group">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:animate-pulse shadow-lg">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <p className="text-sm font-bold text-foreground gradient-text">Viral Marketing</p>
                      <p className="text-xs text-accent font-medium mt-1">10x Growth</p>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="scale-in" delay={1.0}>
                    <div className="bg-card/50 backdrop-blur-sm p-6 text-center hover:scale-110 hover:rotate-3 transition-all duration-500 border border-yellow-400/20 shadow-xl group">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:animate-pulse shadow-lg">
                        <span className="text-2xl">💰</span>
                      </div>
                      <p className="text-sm font-bold text-foreground gradient-text">ROI Machine</p>
                      <p className="text-xs text-yellow-600 font-medium mt-1">300% Returns</p>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="scale-in" delay={1.2}>
                    <div className="bg-card/50 backdrop-blur-sm p-6 text-center hover:scale-110 hover:-rotate-3 transition-all duration-500 border border-purple-500/20 shadow-xl group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center group-hover:animate-pulse shadow-lg">
                        <span className="text-2xl">👑</span>
                      </div>
                      <p className="text-sm font-bold text-foreground gradient-text">Premium Brand</p>
                      <p className="text-xs text-purple-600 font-medium mt-1">Luxury Design</p>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}