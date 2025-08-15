import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Globe, Megaphone, Search, Palette, BarChart3, Zap, Star, Trophy, Target, Rocket } from 'lucide-react'

const serviceCategories = [
  {
    id: "websites",
    title: "Website Development",
    icon: Globe,
    description: "High-converting websites that turn visitors into customers",
    tagline: "Professional • Fast • Conversion-Optimized",
    features: [
      "Lightning-fast loading (<2 seconds)",
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "Advanced lead capture systems",
      "Content management system",
      "SSL security & backup systems",
      "Google Analytics & tracking",
      "6 months technical support"
    ],
    packages: [
      {
        name: "Professional Website",
        price: "₹25,000",
        originalPrice: "₹40,000",
        description: "Perfect for service businesses and professionals",
        includes: ["Up to 8 pages", "Contact forms", "Premium SEO", "Mobile responsive", "1 year hosting", "Social integration"],
        popular: false
      },
      {
        name: "Business Growth Website",
        price: "₹45,000",
        originalPrice: "₹70,000",
        description: "Advanced features for scaling businesses",
        includes: ["Up to 15 pages", "Advanced forms", "Premium SEO", "Chat integration", "Analytics setup", "Lead magnets", "Blog system"],
        popular: true
      },
      {
        name: "E-commerce Platform",
        price: "₹75,000",
        originalPrice: "₹120,000",
        description: "Complete online store solution",
        includes: ["Product catalog", "Payment gateway", "Inventory management", "Order tracking", "Customer accounts", "Marketing automation", "Multi-vendor ready"],
        popular: false
      }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "ROI-focused marketing campaigns that scale your business",
    tagline: "Data-Driven • Results-Focused • Scalable",
    features: [
      "Google Ads management & optimization",
      "Facebook & Instagram advertising",
      "LinkedIn B2B marketing",
      "Content creation & strategy",
      "Email marketing automation",
      "WhatsApp marketing campaigns",
      "Conversion rate optimization",
      "Detailed performance analytics"
    ],
    packages: [
      {
        name: "Growth Accelerator",
        price: "₹35,000/month",
        originalPrice: "₹50,000/month",
        description: "Comprehensive marketing for growing businesses",
        includes: ["Google & Facebook ads", "Social media management", "Content creation", "Email campaigns", "Monthly strategy calls", "Performance reports"],
        popular: false
      },
      {
        name: "Business Domination",
        price: "₹65,000/month",
        originalPrice: "₹95,000/month",
        description: "Full-scale marketing for established businesses",
        includes: ["Multi-platform advertising", "Advanced targeting", "Marketing automation", "CRM integration", "Weekly optimization", "Dedicated manager"],
        popular: true
      },
      {
        name: "Enterprise Scaling",
        price: "₹1,25,000/month",
        originalPrice: "₹1,80,000/month",
        description: "Enterprise-level marketing infrastructure",
        includes: ["All marketing channels", "Custom automation", "Advanced analytics", "24/7 support", "Daily optimization", "C-level reporting"],
        popular: false
      }
    ]
  },
  {
    id: "automation",
    title: "Marketing Automation",
    icon: Zap,
    description: "AI-powered systems that work 24/7 to grow your business",
    tagline: "AI-Powered • 24/7 Operation • Scalable Growth",
    features: [
      "AI-powered lead qualification",
      "Multi-channel automation workflows",
      "Smart email sequence optimization",
      "WhatsApp business automation",
      "CRM integration & management",
      "Behavioral trigger systems",
      "Advanced customer segmentation",
      "Real-time performance tracking"
    ],
    packages: [
      {
        name: "Smart Automation",
        price: "₹25,000 setup",
        originalPrice: "₹40,000",
        description: "Essential automation for growing businesses",
        includes: ["Lead capture automation", "Email sequences", "WhatsApp integration", "Basic CRM setup", "3 months support"],
        popular: false
      },
      {
        name: "Advanced Automation",
        price: "₹55,000 setup",
        originalPrice: "₹85,000",
        description: "Comprehensive automation workflows",
        includes: ["Multi-channel automation", "Advanced sequences", "Behavioral triggers", "CRM integration", "A/B testing", "6 months support"],
        popular: true
      },
      {
        name: "Enterprise Automation",
        price: "₹1,25,000 setup",
        originalPrice: "₹2,00,000",
        description: "Custom AI-powered automation systems",
        includes: ["Custom AI workflows", "API integrations", "Advanced analytics", "Multi-touch attribution", "12 months support", "Dedicated specialist"],
        popular: false
      }
    ]
  }
]

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Premium Business Growth Services
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Services That <span className="gradient-text">Scale</span> Businesses
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From high-converting websites to AI-powered marketing automation, we provide the complete digital infrastructure 
                your business needs to dominate your market and achieve sustainable growth.
              </p>
            </div>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">₹200Cr+</div>
                <p className="text-sm text-muted-foreground">Revenue Generated</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">450%</div>
                <p className="text-sm text-muted-foreground">Average Growth</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Client Success Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="websites" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-muted/30 p-1 rounded-2xl">
                {serviceCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id} 
                      className="flex items-center gap-2 py-4 px-6 rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-lg"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="hidden sm:inline font-medium">{category.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-12">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <category.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">{category.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">{category.description}</p>
                    <Badge variant="outline" className="text-sm px-4 py-1">
                      {category.tagline}
                    </Badge>
                  </div>

                  {/* Features Showcase */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-border mb-12">
                    <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      What's Included
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Packages */}
                  <div>
                    <div className="text-center mb-12">
                      <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">
                        Choose Your <span className="gradient-text">Growth Package</span>
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        Transparent pricing with no hidden costs. All packages include our success guarantee.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {category.packages.map((pkg, index) => (
                        <Card key={index} className={`bg-card/50 backdrop-blur-sm border-border relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${pkg.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}>
                          {pkg.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                              <Badge className="bg-gradient-to-r from-accent to-primary text-white font-bold px-4 py-2 rounded-full">
                                <Star className="w-3 h-3 mr-1 fill-current" />
                                MOST POPULAR
                              </Badge>
                            </div>
                          )}
                          
                          <CardHeader className="text-center pb-6">
                            <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                            <div className="space-y-2">
                              <div className="flex items-center justify-center gap-2">
                                <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                                {pkg.originalPrice && (
                                  <span className="text-lg text-muted-foreground line-through">{pkg.originalPrice}</span>
                                )}
                              </div>
                              {pkg.originalPrice && (
                                <Badge variant="outline" className="text-xs bg-accent/10 text-accent">
                                  Save {Math.round((1 - parseInt(pkg.price.replace(/[^0-9]/g, '')) / parseInt(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="text-base leading-relaxed">{pkg.description}</CardDescription>
                          </CardHeader>
                          
                          <CardContent>
                            <ul className="space-y-4 mb-8">
                              {pkg.includes.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                            
                            <Button 
                              className={`w-full py-3 text-base font-semibold transition-all duration-300 ${
                                pkg.popular 
                                  ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white' 
                                  : 'hover:bg-primary hover:text-primary-foreground'
                              }`}
                              variant={pkg.popular ? "default" : "outline"}
                            >
                              {pkg.popular ? 'Start Growing Now' : 'Get Started'}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Success Guarantee */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-3xl border border-primary/20">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Success Guarantee</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We're so confident in our services that we guarantee results. If you don't see significant improvement 
                  in your business metrics within 90 days, we'll work for free until you do.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>90-day guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Measurable results</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>Full transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Ready to <span className="gradient-text">Scale</span> Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses who've transformed their growth with our proven strategies. 
                Book a free consultation to discuss your custom growth plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                    Book Free Strategy Call
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20business%20growth%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    WhatsApp for Quick Help
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Services