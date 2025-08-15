import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Stethoscope, GraduationCap, Home, Heart, Briefcase, ShoppingCart, TrendingUp, Users, Star, Trophy, Target, Zap } from 'lucide-react'

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare & Medical",
    description: "Specialized digital solutions for doctors, clinics, and healthcare providers with HIPAA compliance and patient-focused design.",
    services: [
      "HIPAA-compliant patient portals",
      "Advanced appointment scheduling",
      "Telemedicine integration",
      "Medical SEO optimization",
      "Patient education resources",
      "Insurance verification systems",
      "Automated follow-up sequences",
      "Review and reputation management"
    ],
    results: "500% average increase in patient appointments",
    caseStudy: "Dr. Sindhu's oncology practice generated 500+ monthly patient inquiries and ₹25L+ growth",
    color: "from-blue-500 to-blue-600",
    stats: { projects: "25+", growth: "400%", revenue: "₹10Cr+" },
    featured: true
  },
  {
    icon: Home,
    name: "Real Estate & Construction",
    description: "Premium property showcase platforms with virtual tours, investment calculators, and advanced lead management systems.",
    services: [
      "3D virtual property tours",
      "Advanced property search filters", 
      "Investment ROI calculators",
      "Lead scoring and CRM integration",
      "Construction progress tracking",
      "Mortgage and EMI calculators",
      "Location advantage analytics",
      "Investor communication portals"
    ],
    results: "₹100Cr+ in property sales generated",
    caseStudy: "Natureland Infra achieved ₹50L+ sales pipeline through strategic digital marketing",
    color: "from-orange-500 to-red-500",
    stats: { projects: "15+", growth: "600%", revenue: "₹100Cr+" },
    featured: true
  },
  {
    icon: GraduationCap,
    name: "Education & E-Learning",
    description: "Comprehensive learning management systems and enrollment platforms for educational institutions and coaching centers.",
    services: [
      "Learning management systems",
      "Student enrollment automation",
      "Online course delivery platforms",
      "Progress tracking and analytics",
      "Parent-student communication",
      "Automated certificate generation",
      "Payment and fee management",
      "Multi-format content delivery"
    ],
    results: "2000+ students enrolled through digital platforms",
    caseStudy: "Elite Coaching Network enrolled 2000+ students with ₹50L+ monthly revenue",
    color: "from-green-500 to-emerald-500",
    stats: { projects: "20+", growth: "400%", revenue: "₹25Cr+" },
    featured: true
  },
  {
    icon: Heart,
    name: "Wellness & Fitness",
    description: "Advanced booking and membership systems for gyms, spas, wellness centers, and fitness professionals.",
    services: [
      "Class scheduling and booking",
      "Membership management systems",
      "Personal trainer matching",
      "Wellness program showcases",
      "Health assessment forms",
      "Progress tracking tools",
      "Community building features",
      "Nutrition and meal planning"
    ],
    results: "300% increase in membership signups",
    caseStudy: "Premium Wellness Chain added 1000+ members with automated systems",
    color: "from-purple-500 to-pink-500",
    stats: { projects: "12+", growth: "300%", revenue: "₹15Cr+" },
    featured: false
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Credibility-building platforms for CAs, lawyers, consultants, and other professional service providers.",
    services: [
      "Professional credentials showcase",
      "Service portfolio presentation",
      "Client testimonial systems",
      "Consultation booking platforms",
      "Document management portals",
      "Case study presentations",
      "Resource and knowledge sharing",
      "Professional blog integration"
    ],
    results: "200+ qualified B2B leads monthly",
    caseStudy: "Leading CA firm increased business inquiries by 400% with professional platform",
    color: "from-indigo-500 to-blue-500",
    stats: { projects: "18+", growth: "350%", revenue: "₹20Cr+" },
    featured: false
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Complete online store solutions with inventory management, payment integration, and advanced marketing tools.",
    services: [
      "Advanced product catalog systems",
      "Multi-channel inventory management",
      "Secure payment gateway integration",
      "Order tracking and management",
      "Customer loyalty programs",
      "Automated marketing campaigns",
      "Analytics and reporting tools",
      "Multi-vendor marketplace features"
    ],
    results: "500% increase in online sales",
    caseStudy: "Fashion boutique achieved ₹25L+ monthly online revenue with full e-commerce solution",
    color: "from-pink-500 to-rose-500",
    stats: { projects: "10+", growth: "500%", revenue: "₹30Cr+" },
    featured: false
  }
]

const Industries = () => {
  const featuredIndustries = industries.filter(industry => industry.featured)
  const allIndustries = industries

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Industry-Specialized Expertise
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Industries We <span className="gradient-text">Dominate</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep industry expertise meets cutting-edge digital strategies. We don't just understand your business – 
                we've mastered the unique challenges and opportunities in your sector.
              </p>
            </div>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                <p className="text-sm text-muted-foreground">Industries Mastered</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Specialized Projects</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">₹200Cr+</div>
                <p className="text-sm text-muted-foreground">Revenue Generated</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">450%</div>
                <p className="text-sm text-muted-foreground">Average Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Industries */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Signature</span> Specializations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The industries where we've achieved the most dramatic transformations and generated the highest returns for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredIndustries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-500 relative">
                    {/* Featured Badge */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-gradient-to-r from-accent to-primary text-white font-bold px-3 py-1 rotate-12">
                        <Trophy className="w-3 h-3 mr-1 fill-current" />
                        FEATURED
                      </Badge>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-foreground">{industry.name}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                            <span>{industry.stats.projects} Projects</span>
                            <span>{industry.stats.growth} Growth</span>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Specialized Services */}
                      <div>
                        <h4 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
                          <Zap className="w-4 h-4 text-primary" />
                          Advanced Solutions
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {industry.services.slice(0, 4).map((service, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              {service}
                            </div>
                          ))}
                          <span className="text-xs text-accent font-medium ml-4">
                            +{industry.services.length - 4} more specialized features
                          </span>
                        </div>
                      </div>

                      {/* Results Highlight */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">Proven Results</span>
                        </div>
                        <p className="text-sm font-medium text-foreground">{industry.results}</p>
                      </div>

                      {/* Success Story */}
                      <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-accent fill-current" />
                          <span className="font-semibold text-accent">Success Spotlight</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{industry.caseStudy}</p>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                        Get Industry Strategy
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Industries Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Complete <span className="gradient-text">Industry</span> Coverage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital solutions tailored for every major industry, backed by deep sector expertise and proven results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allIndustries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-xl text-foreground">{industry.name}</CardTitle>
                            {industry.featured && (
                              <Badge variant="outline" className="text-xs">Featured</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                            <span>{industry.stats.projects} Projects</span>
                            <span>{industry.stats.revenue} Generated</span>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Key Services */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                          <Briefcase className="w-4 h-4 text-primary" />
                          Core Services
                        </h4>
                        <div className="grid grid-cols-1 gap-1">
                          {industry.services.slice(0, 4).map((service, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              {service}
                            </div>
                          ))}
                          <span className="text-xs text-accent font-medium ml-3">
                            +{industry.services.length - 4} specialized solutions
                          </span>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-3 h-3 text-primary" />
                          <span className="font-semibold text-primary text-sm">Typical Results</span>
                        </div>
                        <p className="text-sm font-medium text-foreground">{industry.results}</p>
                      </div>

                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Get {industry.name} Strategy
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Industry Specialization */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Why <span className="gradient-text">Industry Expertise</span> Matters
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Generic marketing fails because every industry has unique customer behaviors, regulations, and growth opportunities. 
                Our specialized approach delivers superior results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Deep Market Understanding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand your target audience, industry regulations, competitive landscape, 
                    and growth patterns better than generic agencies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Proven Industry Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our marketing strategies are tested and refined specifically for your industry, 
                    ensuring higher success rates and better ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Accelerated Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No learning curve means we implement winning strategies immediately 
                    and start generating results from day one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Ready to <span className="gradient-text">Dominate</span> Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our industry-specific expertise accelerate your business growth and establish your market leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="px-8 py-4">
                    Get Industry Strategy
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20discuss%20industry-specific%20growth%20strategies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    Discuss My Industry
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

export default Industries