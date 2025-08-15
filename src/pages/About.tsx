import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, Users, Zap, Award, Heart, TrendingUp, CheckCircle } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                About <span className="gradient-text">Grow Beyyond</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just another marketing agency. We're growth partners who believe 
                every business deserves to grow beyond their current limitations.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Businesses Grown</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">₹5Cr+</div>
                <p className="text-sm text-muted-foreground">Revenue Generated</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">300%</div>
                <p className="text-sm text-muted-foreground">Average Growth</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">24hrs</div>
                <p className="text-sm text-muted-foreground">Website Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                    alt="Grow Beyyond team working together"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Grow Beyyond was born from a simple observation: most businesses struggle not because 
                    they lack great products or services, but because they can't effectively reach their ideal customers.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded by digital marketing veterans who had worked with Fortune 500 companies, 
                    we realized that small and medium businesses needed the same level of strategic thinking 
                    and execution, but with faster delivery and more affordable pricing.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, we've helped 50+ businesses across India achieve remarkable growth through 
                    our specialized approach to digital marketing and website development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="glass-card border-glass-border">
                <CardHeader className="text-center">
                  <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    To democratize digital marketing by making world-class growth strategies 
                    accessible to every business, regardless of size or budget. We believe 
                    every entrepreneur deserves the tools and expertise to compete with industry giants.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border">
                <CardHeader className="text-center">
                  <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    To be India's most trusted growth partner, known for delivering 
                    exceptional results with lightning-fast execution. We envision a future 
                    where every business can grow beyond their current limitations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Speed & Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We believe speed is a competitive advantage. Our streamlined processes 
                    deliver websites in 24 hours and campaigns in 48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Results-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every strategy, every campaign, every decision is made with one goal: 
                    measurable growth for your business. No vanity metrics, just real results.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Client Success</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your success is our success. We're not satisfied until you're getting 
                    the results you need to grow your business beyond your expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Why Choose <span className="gradient-text">Grow Beyyond</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're different from traditional agencies. Here's what sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Industry Specialization</h3>
                    <p className="text-muted-foreground">
                      We don't work with everyone. We specialize in 6 key industries, 
                      allowing us to deliver faster results with proven strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24-Hour Website Delivery</h3>
                    <p className="text-muted-foreground">
                      While others take weeks, we deliver professional websites in 24 hours 
                      using our proven templates and streamlined process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Guaranteed Results</h3>
                    <p className="text-muted-foreground">
                      We're so confident in our approach that if we don't improve your leads 
                      within 90 days, we'll work for free until we do.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                    <p className="text-muted-foreground">
                      No hidden fees, no long-term contracts. Our pricing is clear, 
                      competitive, and designed for growing businesses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">All-in-One Solution</h3>
                    <p className="text-muted-foreground">
                      From websites to Google Ads, social media to automation - 
                      everything you need to grow is handled by one expert team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Local Market Expertise</h3>
                    <p className="text-muted-foreground">
                      We understand the Indian market, customer behavior, and compliance 
                      requirements better than international agencies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Questions? Issues? Opportunities? Our team is available on WhatsApp 
                      24/7 to support your growth journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      50+ successful projects, ₹5Cr+ revenue generated for clients, 
                      and 300% average growth rate speak for themselves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A passionate team of digital marketing experts, developers, and growth strategists 
                dedicated to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                    alt="Founder & CEO"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Arjun Sharma</CardTitle>
                  <CardDescription>Founder & CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    10+ years in digital marketing with Fortune 500 companies. 
                    Passionate about helping businesses grow beyond limitations.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b1d4?w=150&h=150&fit=crop&crop=face" 
                    alt="Head of Marketing"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Priya Mehta</CardTitle>
                  <CardDescription>Head of Marketing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Google Ads certified expert with 8+ years experience. 
                    Specializes in high-ROI campaigns for service businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                    alt="Lead Developer"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle>Raj Patel</CardTitle>
                  <CardDescription>Lead Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full-stack developer and UX expert. Creates websites that 
                    not only look great but convert visitors into customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Grow <span className="gradient-text">Beyyond</span> Your Current Results?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 50+ businesses that have already chosen Grow Beyyond as their growth partner. 
                Let's discuss how we can accelerate your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Book Free Consultation
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918879394486?text=Hi%2C%20I%20want%20to%20learn%20more%20about%20Grow%20Beyyond%20and%20how%20you%20can%20help%20my%20business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    WhatsApp Us
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

export default About