import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Globe, Megaphone, Search, Palette, BarChart3, Zap } from 'lucide-react'

const serviceCategories = [
  {
    id: "websites",
    title: "Website Development",
    icon: Globe,
    description: "Professional websites that convert visitors into customers",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading speed (<3 seconds)",
      "Contact forms and lead capture",
      "Content management system",
      "SSL certificate and security",
      "Google Analytics integration",
      "3 months technical support"
    ],
    packages: [
      {
        name: "Basic Website",
        price: "₹12,000",
        description: "Perfect for small businesses and professionals",
        includes: ["Up to 5 pages", "Contact form", "Basic SEO", "Mobile responsive", "1 year hosting"]
      },
      {
        name: "Business Website",
        price: "₹25,000",
        description: "Advanced features for growing businesses",
        includes: ["Up to 10 pages", "Advanced forms", "Premium SEO", "Social integration", "Analytics setup", "Chat widget"]
      },
      {
        name: "E-commerce Website",
        price: "₹45,000",
        description: "Complete online store solution",
        includes: ["Product catalog", "Payment gateway", "Inventory management", "Order tracking", "Customer accounts", "Marketing tools"]
      }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Comprehensive marketing strategies that drive growth",
    features: [
      "Google Ads management",
      "Facebook & Instagram ads",
      "Social media marketing",
      "Content creation and strategy",
      "Email marketing campaigns",
      "WhatsApp marketing",
      "Lead nurturing automation",
      "Monthly performance reports"
    ],
    packages: [
      {
        name: "Starter Growth",
        price: "₹25,000/month",
        description: "Essential marketing for new businesses",
        includes: ["Google Ads setup", "Social media management", "Basic content", "Lead forms", "Monthly reporting"]
      },
      {
        name: "Business Growth",
        price: "₹50,000/month",
        description: "Comprehensive marketing for established businesses",
        includes: ["Multi-platform ads", "Advanced targeting", "Content calendar", "Email campaigns", "CRM integration", "Bi-weekly calls"]
      },
      {
        name: "Enterprise Growth",
        price: "₹1,00,000/month",
        description: "Full-scale marketing for large businesses",
        includes: ["All platforms", "Advanced automation", "Custom strategies", "Dedicated manager", "Weekly reporting", "Priority support"]
      }
    ]
  },
  {
    id: "automation",
    title: "Marketing Automation",
    icon: Zap,
    description: "Automated systems that work 24/7 to grow your business",
    features: [
      "Lead capture automation",
      "Email sequence setup",
      "WhatsApp auto-responders",
      "CRM integration",
      "Follow-up sequences",
      "Appointment booking system",
      "Customer journey mapping",
      "Performance tracking"
    ],
    packages: [
      {
        name: "Basic Automation",
        price: "₹15,000 setup",
        description: "Essential automation for small businesses",
        includes: ["Lead capture forms", "Basic email sequences", "WhatsApp integration", "Simple CRM setup"]
      },
      {
        name: "Advanced Automation",
        price: "₹35,000 setup",
        description: "Comprehensive automation workflows",
        includes: ["Multi-channel automation", "Advanced sequences", "Behavioral triggers", "Detailed analytics", "A/B testing"]
      },
      {
        name: "Enterprise Automation",
        price: "₹75,000 setup",
        description: "Custom automation for complex businesses",
        includes: ["Custom workflows", "API integrations", "Advanced segmentation", "Multi-touch attribution", "Dedicated support"]
      }
    ]
  }
]

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From websites that convert to marketing that scales, we provide everything 
                your business needs to grow beyond your competition.
              </p>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="websites" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                {serviceCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2 py-4">
                      <Icon className="w-5 h-5" />
                      <span className="hidden sm:inline">{category.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {serviceCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-12">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">{category.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  {/* Features */}
                  <div className="glass-card p-8 rounded-2xl border border-glass-border mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center">What's Included</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {category.packages.map((pkg, index) => (
                      <Card key={index} className="glass-card border-glass-border relative">
                        {index === 1 && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                          <div className="text-3xl font-bold gradient-text">{pkg.price}</div>
                          <CardDescription className="text-base">{pkg.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 mb-6">
                            {pkg.includes.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                            Get Started
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Choose Your Growth Package?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Not sure which service is right for you? Book a free consultation and we'll 
                create a custom growth plan for your business.
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
                  href="https://wa.me/918879394486?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20services" 
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

export default Services