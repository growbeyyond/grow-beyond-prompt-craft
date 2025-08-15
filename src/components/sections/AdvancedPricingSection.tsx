import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { 
  Check, 
  Zap, 
  Crown, 
  Rocket, 
  Star,
  ArrowRight,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface PricingTier {
  id: string
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  originalPrice?: {
    monthly: number
    yearly: number
  }
  features: string[]
  highlights: string[]
  icon: React.ComponentType<any>
  popular?: boolean
  enterprise?: boolean
  ctaText: string
  ctaVariant: 'default' | 'outline' | 'premium'
}

export const AdvancedPricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const pricingTiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Digital Starter',
      description: 'Perfect for small businesses getting started online',
      price: { monthly: 25000, yearly: 250000 },
      originalPrice: { monthly: 35000, yearly: 350000 },
      features: [
        'Professional 5-page website',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        'Google Analytics setup',
        '3 months free maintenance',
        'SSL certificate included',
        'Basic social media setup'
      ],
      highlights: ['24-hour delivery', 'Mobile-first design'],
      icon: Zap,
      ctaText: 'Start Growing',
      ctaVariant: 'outline'
    },
    {
      id: 'growth',
      name: 'Growth Accelerator',
      description: 'Comprehensive solution for serious business growth',
      price: { monthly: 40000, yearly: 400000 },
      originalPrice: { monthly: 65000, yearly: 650000 },
      features: [
        'Premium 10-page website',
        'Advanced UI/UX design',
        'Complete SEO optimization',
        'Google Ads setup & management',
        'Lead generation automation',
        'Social media marketing',
        'Content creation (blogs/posts)',
        'Analytics & reporting',
        '6 months free maintenance',
        'Priority support',
        'Custom integrations'
      ],
      highlights: ['Most popular', '200-400% ROI guarantee', 'Free Google Ads'],
      icon: TrendingUp,
      popular: true,
      ctaText: 'Accelerate Growth',
      ctaVariant: 'default'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Domination',
      description: 'Complete digital transformation for market leaders',
      price: { monthly: 75000, yearly: 750000 },
      features: [
        'Unlimited pages & features',
        'Custom web application',
        'AI-powered automation',
        'Multi-location SEO',
        'Advanced marketing campaigns',
        'CRM integration',
        'Custom reporting dashboard',
        'Dedicated account manager',
        '12 months free maintenance',
        'White-label solutions',
        'API development',
        'Enterprise security',
        'Custom training sessions'
      ],
      highlights: ['Premium support', 'Custom solutions', 'Dedicated team'],
      icon: Crown,
      enterprise: true,
      ctaText: 'Dominate Market',
      ctaVariant: 'premium'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const calculateSavings = (tier: PricingTier) => {
    if (!tier.originalPrice) return null
    const current = isYearly ? tier.price.yearly : tier.price.monthly
    const original = isYearly ? tier.originalPrice.yearly : tier.originalPrice.monthly
    const savings = original - current
    const percentage = Math.round((savings / original) * 100)
    return { amount: savings, percentage }
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30">
            <Star className="w-3 h-3 mr-1" />
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Choose Your <span className="gradient-text">Growth Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your business with our proven digital solutions. 
            Each plan is designed to deliver exceptional ROI and accelerate your growth.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={cn("font-medium", !isYearly && "text-primary")}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={cn("font-medium", isYearly && "text-primary")}>
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-700">
              Save 20%
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon
            const savings = calculateSavings(tier)
            const currentPrice = isYearly ? tier.price.yearly : tier.price.monthly
            const originalPrice = tier.originalPrice ? 
              (isYearly ? tier.originalPrice.yearly : tier.originalPrice.monthly) : null

            return (
              <Card
                key={tier.id}
                className={cn(
                  "relative overflow-hidden transition-all duration-500 cursor-pointer group",
                  tier.popular && "glass-card-premium border-primary/50 scale-105",
                  tier.enterprise && "glass-card-premium border-accent/50",
                  !tier.popular && !tier.enterprise && "glass-card",
                  selectedTier === tier.id && "ring-2 ring-primary/50"
                )}
                onClick={() => setSelectedTier(tier.id)}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      <Rocket className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Enterprise Badge */}
                {tier.enterprise && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-accent to-tertiary text-white px-4 py-1">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl font-display font-bold mb-2">
                    {tier.name}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    {tier.description}
                  </p>

                  {/* Pricing */}
                  <div className="space-y-2">
                    {originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        {formatPrice(originalPrice)}
                      </div>
                    )}
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold gradient-text">
                        {formatPrice(currentPrice)}
                      </span>
                      <span className="text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {savings && (
                      <Badge variant="secondary" className="bg-green-500/20 text-green-700">
                        Save {formatPrice(savings.amount)} ({savings.percentage}%)
                      </Badge>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {tier.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      "w-full py-6 text-lg font-semibold group transition-all duration-300",
                      tier.ctaVariant === 'premium' && "btn-premium",
                      tier.ctaVariant === 'default' && "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90",
                      tier.ctaVariant === 'outline' && "border-2 border-primary/30 hover:bg-primary/10"
                    )}
                    variant={tier.ctaVariant === 'outline' ? 'outline' : 'default'}
                  >
                    {tier.ctaText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Additional Info */}
                  <div className="mt-4 text-center text-xs text-muted-foreground">
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>24h delivery</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>Dedicated support</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? We create tailored packages for unique business needs.
          </p>
          <Button variant="outline" size="lg" className="border-2 border-primary/30 hover:bg-primary/10">
            Schedule Free Consultation
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}