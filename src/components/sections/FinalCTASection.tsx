import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Clock, TrendingUp, Users } from 'lucide-react'

export const FinalCTASection = () => {
  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Ready to <span className="gradient-text">Grow Beyyond</span> Your Competition?
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join 50+ businesses already growing with our proven system. 
            Get your website in 24 hours and start generating leads immediately.
          </p>

          {/* Value propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="glass-card p-6 rounded-2xl border border-glass-border">
              <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24-Hour Delivery</h3>
              <p className="text-muted-foreground">Your website goes live in just 24 hours, not 24 days</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl border border-glass-border">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guaranteed Growth</h3>
              <p className="text-muted-foreground">200-400% average increase in leads within 90 days</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl border border-glass-border">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Dedicated team managing your growth 24/7</p>
            </div>
          </div>

          {/* Special offer */}
          <div className="glass-card p-8 rounded-2xl border border-glass-border mb-12 text-left max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-4">
                🎉 LIMITED TIME OFFER
              </span>
              <h3 className="text-2xl font-display font-bold">
                Book This Week & Save ₹15,000
              </h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Complete website in 24 hours - Worth ₹12,000</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Google Ads setup & first month free - Worth ₹25,000</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Social media strategy & templates - Worth ₹8,000</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Lead generation automation setup - Worth ₹10,000</span>
              </div>
            </div>
            
            <div className="border-t border-glass-border mt-6 pt-6 text-center">
              <p className="text-muted-foreground mb-2">Total Value: ₹55,000</p>
              <p className="text-3xl font-bold gradient-text">Your Price: ₹40,000</p>
              <p className="text-sm text-accent font-medium">Save ₹15,000 • Offer expires in 7 days</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://calendly.com/growbeyyond/consultation" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            
            <a 
              href="https://wa.me/918879394486?text=Hi%2C%20I%20want%20to%20claim%20the%20₹15%2C000%20discount%20offer%20and%20grow%20my%20business" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
                Claim Discount via WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>24/7 support included</span>
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              ⚡ Only 3 spots available this week • Your competitors aren't waiting
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}