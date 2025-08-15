import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: "Service Website",
    price: "₹12,000",
    period: "one-time",
    description: "Perfect for service businesses that need a professional online presence",
    features: [
      "Professional website design",
      "24-hour delivery",
      "Mobile responsive",
      "Contact forms integrated",
      "Basic SEO setup",
      "Google My Business setup",
      "Social media links",
      "1 month support"
    ],
    cta: "Get Started",
    popular: false,
    advance: "50% upfront (₹6,000)"
  },
  {
    name: "All-in Growth",
    price: "₹25,000",
    period: "/month",
    description: "Complete digital marketing solution for businesses ready to scale",
    features: [
      "Everything in Service Website",
      "Social media management",
      "Paid advertising campaigns",
      "Content creation & reels",
      "SEO optimization",
      "Lead automation system",
      "CRM integration",
      "Performance reporting",
      "Dedicated account manager",
      "Priority support"
    ],
    cta: "Start Growing",
    popular: true,
    advance: "60% advance (₹15,000)"
  }
]

export const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business goals. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''} glass-card border-0`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : ''}`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Payment terms: {plan.advance}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-6 rounded-2xl border border-primary/20 inline-block mb-6">
            <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-4">
              All payments secured by Razorpay. Get invoice and GST receipt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20pay%20advance%20and%20start%20my%20project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Pay Advance & Start
              </a>
              <a 
                href="tel:+918886435551"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary/30 text-foreground font-medium rounded-lg hover:bg-primary/10 transition-colors"
              >
                Call for Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}