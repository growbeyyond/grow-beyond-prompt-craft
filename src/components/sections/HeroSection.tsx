import { Button } from '@/components/ui/button'
import { SplineEmbed } from '@/components/common/SplineEmbed'
import { ArrowRight, Clock, Users, Award } from 'lucide-react'

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text animate-pulse">AI-Powered Websites</span>
              <br />
              <span className="text-4xl lg:text-6xl">Built in 24 Hours.</span>
              <br />
              <span className="text-3xl lg:text-5xl text-muted-foreground">Marketing That Converts.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              🚀 <strong>Next-gen websites</strong> with AI chatbots, voice search & PWA technology from ₹12,000. 
              <br />
              🎯 <strong>Complete growth systems</strong> from ₹25,000/month with guaranteed ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-6 group shadow-lg hover:shadow-xl transition-all duration-300">
                🚀 Launch in 24h <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 group border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10">
                💼 View Portfolio
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="glass-card p-6">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span>50+ websites launched</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Doctors • Education • Real Estate • Wellness</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Avg. lead response &lt;15 mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Scene */}
          <div className="relative">
            <SplineEmbed
              src="https://prod.spline.design/WN8v3BFvXVYjlsdr/scene.splinecode"
              height={600}
              className="rounded-2xl"
              title="Grow Beyyond 3D Hero Scene"
            />
            
            {/* Fallback for when Spline is not available */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="w-8 h-8 bg-primary rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Websites</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="w-8 h-8 bg-accent rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Social</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Ads</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-medium">Creative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}