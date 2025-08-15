import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Stethoscope, GraduationCap, Home, Heart, Briefcase, ShoppingCart, TrendingUp, Users, Star } from 'lucide-react'

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare & Doctors",
    description: "Specialized websites and marketing for medical professionals, clinics, and healthcare services.",
    services: [
      "Patient appointment booking systems",
      "Medical SEO and local search optimization",
      "HIPAA-compliant contact forms",
      "Doctor profile and service pages",
      "Patient testimonials and reviews",
      "Insurance and billing information"
    ],
    results: "400% average increase in patient appointments",
    caseStudy: "Dr. Sharma's cardiology practice saw 300+ new patients in 3 months",
    color: "bg-blue-500"
  },
  {
    icon: GraduationCap,
    name: "Education & Coaching",
    description: "Student enrollment systems and marketing for educational institutions and coaching centers.",
    services: [
      "Student admission and enrollment forms",
      "Course catalogs and fee structures",
      "Faculty profiles and achievements",
      "Student success stories and results",
      "Online course integration",
      "Parent-student communication portals"
    ],
    results: "250% increase in student enrollments",
    caseStudy: "Elite Coaching Institute enrolled 600+ students in 6 months",
    color: "bg-green-500"
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property showcase websites with advanced search and lead generation for real estate professionals.",
    services: [
      "Property listing and gallery systems",
      "Advanced search and filtering",
      "Virtual tour integrations",
      "Lead capture and CRM integration",
      "Mortgage calculator tools",
      "Agent profile and contact systems"
    ],
    results: "₹2Cr+ in property sales generated",
    caseStudy: "Premium Properties achieved 200+ quality leads monthly",
    color: "bg-orange-500"
  },
  {
    icon: Heart,
    name: "Wellness & Fitness",
    description: "Membership management and booking systems for gyms, spas, and wellness centers.",
    services: [
      "Class scheduling and booking systems",
      "Membership plans and pricing",
      "Trainer profiles and specializations",
      "Wellness program showcases",
      "Health assessment forms",
      "Community and success stories"
    ],
    results: "180% increase in membership signups",
    caseStudy: "Wellness Center Chain added 500+ members in 4 months",
    color: "bg-purple-500"
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Lead generation and credibility building for CAs, lawyers, consultants, and other professionals.",
    services: [
      "Service portfolio and expertise pages",
      "Professional credentials and certifications",
      "Client testimonials and case studies",
      "Consultation booking systems",
      "Resource downloads and guides",
      "Professional blog and insights"
    ],
    results: "50+ qualified B2B leads monthly",
    caseStudy: "CA firm increased business inquiries by 300%",
    color: "bg-indigo-500"
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Complete online stores with inventory management and payment integration for retail businesses.",
    services: [
      "Product catalog and inventory systems",
      "Shopping cart and checkout process",
      "Payment gateway integration",
      "Order tracking and management",
      "Customer account systems",
      "Marketing and promotional tools"
    ],
    results: "300% increase in online sales",
    caseStudy: "Fashion boutique achieved ₹10L+ monthly online revenue",
    color: "bg-pink-500"
  }
]

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Industries We <span className="gradient-text">Specialize</span> In
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We understand that every industry has unique challenges and opportunities. 
                Our tailored solutions are designed specifically for your sector's success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Businesses Grown</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">6</div>
                <p className="text-muted-foreground">Industries Specialized</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">300%</div>
                <p className="text-muted-foreground">Average Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {industries.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <Card key={index} className="glass-card border-glass-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 ${industry.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{industry.name}</CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Services */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Specialized Services
                        </h4>
                        <ul className="space-y-2">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="font-semibold text-accent">Typical Results</span>
                        </div>
                        <p className="text-sm font-medium">{industry.results}</p>
                      </div>

                      {/* Case Study */}
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-primary">Success Story</span>
                        </div>
                        <p className="text-sm">{industry.caseStudy}</p>
                      </div>

                      <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Get Industry-Specific Strategy
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Industry Specialization Matters */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Why Industry <span className="gradient-text">Specialization</span> Matters
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Generic marketing doesn't work. Every industry has unique customer behaviors, 
                compliance requirements, and growth opportunities that require specialized expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Deep Industry Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand your target audience, industry regulations, 
                    and competitive landscape better than generic agencies.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Proven Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our marketing strategies are tested and refined specifically 
                    for your industry, ensuring higher success rates.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Faster Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No learning curve means we can implement winning strategies 
                    immediately and start generating results from day one.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Dominate Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our industry-specific expertise can accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Book Industry Strategy Call
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20discuss%20industry-specific%20marketing%20for%20my%20business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    WhatsApp Your Industry
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