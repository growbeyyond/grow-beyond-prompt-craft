import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, TrendingUp, Users, Clock, Filter } from 'lucide-react'

const portfolioProjects = [
  {
    id: 1,
    title: "Dr. Rajesh Sharma - Cardiology Clinic",
    category: "Healthcare",
    industry: "Medical",
    description: "Complete digital transformation for a leading cardiologist in Mumbai. Implemented patient booking system, Google Ads campaigns, and reputation management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    results: {
      leads: "400+ Monthly Patient Appointments",
      growth: "300% Increase in New Patients",
      time: "2 Weeks to Launch",
      revenue: "₹15L+ Monthly Revenue Growth"
    },
    features: [
      "Patient appointment booking system",
      "Google Ads with medical keywords",
      "Patient testimonial management",
      "HIPAA-compliant contact forms",
      "Medical SEO optimization",
      "Insurance information integration"
    ],
    technologies: ["WordPress", "Google Ads", "Calendly", "WhatsApp API"],
    url: "#",
    testimonial: "Grow Beyyond transformed my practice completely. Within 2 months, my patient appointments increased by 400%."
  },
  {
    id: 2,
    title: "Elite Coaching Institute - JEE/NEET Preparation",
    category: "Education",
    industry: "Coaching",
    description: "Student enrollment system with automated lead nurturing for India's premier JEE/NEET coaching institute. Increased admissions by 250% in 6 months.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    results: {
      leads: "600+ Student Inquiries Monthly",
      growth: "250% Increase in Admissions",
      time: "3 Weeks Development",
      revenue: "₹50L+ Annual Revenue Increase"
    },
    features: [
      "Student admission portal",
      "Course comparison tools",
      "Faculty profile showcases",
      "Student success story gallery",
      "Fee payment integration",
      "Parent-student communication system"
    ],
    technologies: ["React", "Node.js", "Razorpay", "Google Analytics"],
    url: "#",
    testimonial: "The website and marketing strategy helped us enroll 300+ new students in just 4 months. Exceptional ROI!"
  },
  {
    id: 3,
    title: "Premium Properties - Luxury Real Estate",
    category: "Real Estate",
    industry: "Property",
    description: "Property showcase website with advanced filtering and WhatsApp integration. Generated ₹2Cr+ in property sales through digital marketing.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    results: {
      leads: "200+ Quality Property Leads",
      growth: "₹2Cr+ in Property Sales",
      time: "4 Weeks Complete Setup",
      revenue: "300% ROI on Marketing Spend"
    },
    features: [
      "Advanced property search and filters",
      "Virtual tour integrations",
      "Mortgage calculator tools",
      "Agent profile and contact system",
      "Property comparison features",
      "Lead scoring and CRM integration"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "WhatsApp Business API"],
    url: "#",
    testimonial: "Our property sales increased by 250% after launching. The automated lead system saves us 10+ hours per week."
  },
  {
    id: 4,
    title: "Wellness Center Chain - Multi-location Fitness",
    category: "Wellness",
    industry: "Fitness",
    description: "Multi-location booking system with membership management for a premium wellness center chain. 180% increase in member signups.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    results: {
      leads: "500+ New Memberships",
      growth: "180% Increase in Signups",
      time: "5 Weeks Deployment",
      revenue: "₹25L+ Additional Annual Revenue"
    },
    features: [
      "Multi-location class scheduling",
      "Membership plan comparisons",
      "Trainer profile and booking",
      "Wellness program showcases",
      "Health assessment forms",
      "Member community features"
    ],
    technologies: ["WordPress", "WooCommerce", "Booking Plugin", "Google Maps API"],
    url: "#",
    testimonial: "The website and social media strategy brought us 200+ new members in 3 months. Professional and results-driven team."
  },
  {
    id: 5,
    title: "Agarwal & Associates - CA Firm",
    category: "Professional",
    industry: "Finance",
    description: "B2B lead generation system for a leading CA firm. Specialized in corporate tax and audit services with automated client acquisition.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    results: {
      leads: "50+ Qualified B2B Leads Monthly",
      growth: "300% Increase in Business Inquiries",
      time: "3 Weeks Go-Live",
      revenue: "₹40L+ New Business Value"
    },
    features: [
      "Service portfolio showcase",
      "Client testimonial system",
      "Consultation booking calendar",
      "Resource download center",
      "Professional blog system",
      "B2B lead qualification forms"
    ],
    technologies: ["Webflow", "HubSpot", "Calendly", "LinkedIn Integration"],
    url: "#",
    testimonial: "Their B2B lead generation system is incredible. We now get 50+ qualified business inquiries every month."
  },
  {
    id: 6,
    title: "Fashion Forward - Designer Boutique",
    category: "E-commerce",
    industry: "Fashion",
    description: "Complete e-commerce solution for a premium fashion boutique with inventory management and social commerce integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    results: {
      leads: "300+ Online Orders Monthly",
      growth: "300% Increase in Online Sales",
      time: "6 Weeks Full Launch",
      revenue: "₹10L+ Monthly Online Revenue"
    },
    features: [
      "Product catalog with variants",
      "Shopping cart and checkout",
      "Inventory management system",
      "Customer account portal",
      "Social media integration",
      "Email marketing automation"
    ],
    technologies: ["Shopify", "Klaviyo", "Instagram API", "Google Shopping"],
    url: "#",
    testimonial: "The e-commerce website increased our online sales by 300%. Beautiful design and smooth checkout process."
  }
]

const categories = ["All", "Healthcare", "Education", "Real Estate", "Wellness", "Professional", "E-commerce"]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredProjects = selectedCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real results from real businesses. Explore how we've helped companies across 
                industries achieve dramatic growth through strategic digital marketing.
              </p>
            </div>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
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
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by Industry:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="glass-card border-glass-border overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {project.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Results */}
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-accent mb-3">Key Results</h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="block font-medium">{project.results.leads}</span>
                        </div>
                        <div>
                          <span className="block font-medium">{project.results.growth}</span>
                        </div>
                        <div>
                          <span className="block font-medium">{project.results.time}</span>
                        </div>
                        <div>
                          <span className="block font-medium">{project.results.revenue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features Implemented</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {project.features.length > 4 && (
                          <span className="text-xs text-muted-foreground ml-4">
                            +{project.features.length - 4} more features
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary text-sm">Client Testimonial</span>
                      </div>
                      <p className="text-sm italic">"{project.testimonial}"</p>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Detailed Case Study <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-xl">
                  No projects found for the selected category.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4"
                >
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Consistent <span className="gradient-text">Results</span> Across Industries
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our data-driven approach delivers measurable results for every client, 
                regardless of industry or business size.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Average Growth Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">300%</div>
                  <p className="text-muted-foreground">
                    Average increase in leads/sales within the first 90 days of engagement.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Time to Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">30</div>
                  <p className="text-muted-foreground">
                    Days average time to see significant improvement in business metrics.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-glass-border text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle>Client Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">95%</div>
                  <p className="text-muted-foreground">
                    Client retention rate - our results speak for themselves.
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
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every business in our portfolio started where you are now. Let's discuss 
                how we can create similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Book Strategy Session
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918886435551?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20want%20similar%20results%20for%20my%20business" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    Discuss My Project
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

export default Portfolio