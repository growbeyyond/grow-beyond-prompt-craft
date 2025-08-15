import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calculator, TrendingUp, DollarSign, Zap } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/constants'

const industryMultipliers = {
  'healthcare': 2.5,
  'realestate': 3.2,
  'restaurants': 1.8,
  'fitness': 2.1,
  'education': 1.9,
  'automotive': 2.3,
  'beauty': 2.0,
  'technology': 2.8,
  'retail': 1.7,
  'services': 2.4
}

export const InteractiveROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState([50000])
  const [industry, setIndustry] = useState('')
  const [marketingBudget, setMarketingBudget] = useState([10000])

  const calculateROI = () => {
    if (!industry) return { increase: 0, additionalRevenue: 0, roi: 0 }
    
    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers] || 2.0
    const baseIncrease = 0.25 // 25% base increase
    const budgetFactor = Math.min(marketingBudget[0] / monthlyRevenue[0], 0.3) // Cap at 30%
    
    const totalIncrease = (baseIncrease + budgetFactor) * multiplier
    const additionalRevenue = monthlyRevenue[0] * totalIncrease
    const annualAdditionalRevenue = additionalRevenue * 12
    const annualInvestment = marketingBudget[0] * 12
    const roi = ((annualAdditionalRevenue - annualInvestment) / annualInvestment) * 100
    
    return {
      increase: Math.round(totalIncrease * 100),
      additionalRevenue: Math.round(additionalRevenue),
      roi: Math.round(roi)
    }
  }

  const results = calculateROI()

  const handleGetROIReport = () => {
    const message = `Hi! I used your ROI calculator and I'm interested in achieving ${results.increase}% growth for my ${industry} business. Current revenue: ₹${monthlyRevenue[0].toLocaleString()}/month. Can we discuss?`
    window.open(getWhatsAppUrl(message), '_blank')
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0">
            🧮 Interactive Calculator
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Calculate Your <span className="gradient-text">Growth Potential</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much your business could grow with our digital marketing solutions. 
            Real calculations based on industry data.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Your Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Monthly Revenue */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">
                    Current Monthly Revenue: ₹{monthlyRevenue[0].toLocaleString()}
                  </label>
                  <Slider
                    value={monthlyRevenue}
                    onValueChange={setMonthlyRevenue}
                    max={500000}
                    min={10000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹10K</span>
                    <span>₹5L+</span>
                  </div>
                </div>

                {/* Industry */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">Industry</label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="restaurants">Restaurants & Food</SelectItem>
                      <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                      <SelectItem value="education">Education & Training</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="beauty">Beauty & Salon</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="services">Professional Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Marketing Budget */}
                <div className="space-y-4">
                  <label className="text-sm font-medium">
                    Monthly Marketing Budget: ₹{marketingBudget[0].toLocaleString()}
                  </label>
                  <Slider
                    value={marketingBudget}
                    onValueChange={setMarketingBudget}
                    max={100000}
                    min={2000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹2K</span>
                    <span>₹1L+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="glass-card border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Your Growth Projection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {industry ? (
                  <>
                    {/* Revenue Increase */}
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10">
                      <div className="text-4xl font-display font-bold gradient-text mb-2">
                        {results.increase}%
                      </div>
                      <p className="text-sm text-muted-foreground">Revenue Increase</p>
                    </div>

                    {/* Additional Revenue */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-background/50">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Additional Monthly Revenue</span>
                      </div>
                      <span className="font-bold text-lg">₹{results.additionalRevenue.toLocaleString()}</span>
                    </div>

                    {/* Annual ROI */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-background/50">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span className="text-sm">Annual ROI</span>
                      </div>
                      <span className="font-bold text-lg text-green-500">{results.roi}%</span>
                    </div>

                    {/* Annual Projection */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <p className="text-sm text-muted-foreground mb-1">12-Month Projection</p>
                      <p className="font-bold text-xl">₹{(results.additionalRevenue * 12).toLocaleString()}</p>
                      <p className="text-sm text-green-600">Additional Annual Revenue</p>
                    </div>

                    <Button 
                      onClick={handleGetROIReport}
                      className="w-full text-lg py-6 group"
                    >
                      <TrendingUp className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Get My Detailed ROI Report
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      💡 Based on real client data and industry benchmarks
                    </p>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🧮</div>
                    <p className="text-muted-foreground">
                      Select your industry to see your growth potential
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}