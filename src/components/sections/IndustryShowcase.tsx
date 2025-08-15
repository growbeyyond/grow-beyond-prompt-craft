import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Heart, 
  Home, 
  GraduationCap, 
  Briefcase, 
  ShoppingBag, 
  Car,
  Utensils,
  Dumbbell,
  ArrowRight,
  TrendingUp,
  Users,
  Star
} from 'lucide-react'

interface IndustryCase {
  id: string
  industry: string
  clientName: string
  challenge: string
  solution: string
  results: {
    metric: string
    improvement: string
    icon: React.ComponentType<any>
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
  }
  image: string
  technologies: string[]
}

export const IndustryShowcase: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('healthcare')

  const industries = [
    { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'text-red-500' },
    { id: 'realestate', name: 'Real Estate', icon: Home, color: 'text-blue-500' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'text-green-500' },
    { id: 'professional', name: 'Professional Services', icon: Briefcase, color: 'text-purple-500' },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingBag, color: 'text-orange-500' },
    { id: 'automotive', name: 'Automotive', icon: Car, color: 'text-gray-500' },
    { id: 'food', name: 'Food & Beverage', icon: Utensils, color: 'text-yellow-500' },
    { id: 'fitness', name: 'Fitness & Wellness', icon: Dumbbell, color: 'text-pink-500' }
  ]

  const cases: Record<string, IndustryCase> = {
    healthcare: {
      id: 'healthcare',
      industry: 'Healthcare',
      clientName: 'Dr. Priya Medical Center',
      challenge: 'Low online visibility and difficulty in managing patient appointments online',
      solution: 'Custom medical website with integrated appointment booking, patient portal, and telehealth features',
      results: [
        { metric: 'Online Appointments', improvement: '+340%', icon: TrendingUp },
        { metric: 'Patient Inquiries', improvement: '+280%', icon: Users },
        { metric: 'Google Rating', improvement: '4.9/5', icon: Star }
      ],
      testimonial: {
        quote: "Grow Beyyond transformed our practice completely. We now get 5-6 appointments daily through our website, and patients love the online booking system.",
        author: "Dr. Priya Sharma",
        position: "Chief Medical Officer"
      },
      image: "/api/placeholder/600/400",
      technologies: ['Medical CRM', 'Appointment System', 'Patient Portal', 'Telehealth Integration']
    },
    realestate: {
      id: 'realestate',
      industry: 'Real Estate',
      clientName: 'Luxury Homes Hyderabad',
      challenge: 'Generating quality leads for premium properties and showcasing properties effectively',
      solution: 'Premium real estate website with virtual tours, lead capture, and CRM integration',
      results: [
        { metric: 'Qualified Leads', improvement: '+450%', icon: TrendingUp },
        { metric: 'Property Views', improvement: '+380%', icon: Users },
        { metric: 'Conversion Rate', improvement: '12.5%', icon: Star }
      ],
      testimonial: {
        quote: "Our property inquiries increased dramatically. The virtual tour feature is a game-changer - clients are pre-qualified before visits.",
        author: "Rajesh Kumar",
        position: "Managing Partner"
      },
      image: "/api/placeholder/600/400",
      technologies: ['Virtual Tours', 'Property CRM', 'Lead Automation', 'WhatsApp Integration']
    },
    education: {
      id: 'education',
      industry: 'Education',
      clientName: 'Bright Future Academy',
      challenge: 'Declining enrollments and lack of online presence during digital shift',
      solution: 'Educational website with online admissions, course catalog, and student portal',
      results: [
        { metric: 'Online Admissions', improvement: '+520%', icon: TrendingUp },
        { metric: 'Course Inquiries', improvement: '+400%', icon: Users },
        { metric: 'Student Satisfaction', improvement: '96%', icon: Star }
      ],
      testimonial: {
        quote: "The online admission system streamlined our entire process. We're now enrolling students from across the state, not just locally.",
        author: "Prof. Sunitha Reddy",
        position: "Principal"
      },
      image: "/api/placeholder/600/400",
      technologies: ['LMS Integration', 'Online Admissions', 'Student Portal', 'Payment Gateway']
    }
  }

  const currentCase = cases[selectedIndustry] || cases.healthcare

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30">
            <Star className="w-3 h-3 mr-1" />
            Industry Expertise
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Proven Success Across <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From healthcare to e-commerce, we've helped businesses in every sector 
            achieve remarkable digital growth. See how we can transform your industry.
          </p>
        </div>

        {/* Industry Tabs */}
        <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full mb-12 h-auto p-1 bg-muted/50">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  <IconComponent className={`w-5 h-5 ${industry.color}`} />
                  <span className="text-xs font-medium">{industry.name}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {/* Case Study Content */}
          <TabsContent value={selectedIndustry} className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Case Study Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-4">
                    {currentCase.clientName}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {currentCase.industry} Success Story
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div className="glass-card p-6">
                    <h4 className="font-semibold text-foreground mb-3">The Challenge</h4>
                    <p className="text-muted-foreground">{currentCase.challenge}</p>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h4 className="font-semibold text-foreground mb-3">Our Solution</h4>
                    <p className="text-muted-foreground">{currentCase.solution}</p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentCase.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {currentCase.results.map((result, index) => {
                    const IconComponent = result.icon
                    return (
                      <div key={index} className="text-center glass-card p-4">
                        <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold gradient-text mb-1">
                          {result.improvement}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Testimonial */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <blockquote className="text-muted-foreground italic mb-4">
                      "{currentCase.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {currentCase.testimonial.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {currentCase.testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {currentCase.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Button className="btn-premium group">
                  Get Similar Results for Your {currentCase.industry} Business
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="glass-card-premium p-8 rounded-2xl">
                  <img
                    src={currentCase.image}
                    alt={`${currentCase.clientName} website`}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  {/* Quick Stats Overlay */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center glass-card p-4 rounded-lg">
                      <div className="text-xl font-bold text-primary mb-1">24h</div>
                      <div className="text-xs text-muted-foreground">Delivery Time</div>
                    </div>
                    <div className="text-center glass-card p-4 rounded-lg">
                      <div className="text-xl font-bold text-accent mb-1">300%+</div>
                      <div className="text-xs text-muted-foreground">ROI Achieved</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float opacity-60" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-16 glass-card-premium p-8 rounded-2xl">
          <h3 className="text-2xl font-display font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join 50+ businesses that have transformed their digital presence with our 
            industry-specific solutions. Get your custom strategy in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium">
              Get Your Industry Analysis
            </Button>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              View More Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}