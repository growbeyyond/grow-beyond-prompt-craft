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
    title: "Dr. Sindhu Pericherla - OncoCore Oncology",
    category: "Healthcare",
    industry: "Medical",
    description: "Comprehensive digital presence for leading oncologist in Hyderabad. Professional website with appointment booking, patient education resources, and Google My Business optimization.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    results: {
      leads: "200+ Monthly Patient Inquiries",
      growth: "300% Increase in Online Visibility",
      time: "2 Weeks to Launch",
      revenue: "₹10L+ Monthly Practice Growth"
    },
    features: [
      "Professional medical website design",
      "Patient appointment booking system",
      "Cancer care information portal",
      "Google My Business optimization",
      "Medical SEO for oncology keywords",
      "Social media presence management"
    ],
    technologies: ["WordPress", "Google Ads", "Calendly", "WhatsApp Business"],
    url: "https://drsindhupericherlaonco.in/",
    testimonial: "Grow Beyyond created an exceptional online presence for my oncology practice. The website and digital marketing increased patient inquiries by 300%."
  },
  {
    id: 2,
    title: "Dr. Namratha Sai Reddy - Gynecology Specialist", 
    category: "Healthcare",
    industry: "Medical",
    description: "Modern gynecology practice website with advanced booking system, patient portal, and comprehensive women's health information. Enhanced digital credibility and patient trust.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    results: {
      leads: "150+ Monthly Appointments",
      growth: "250% Digital Reach Expansion", 
      time: "3 Weeks Development",
      revenue: "₹8L+ Additional Monthly Revenue"
    },
    features: [
      "Women's health information portal",
      "Online consultation booking",
      "Patient education resources",
      "Pregnancy care guidance",
      "Health blog and articles",
      "Multi-language support (Telugu/English)"
    ],
    technologies: ["WordPress", "WooCommerce", "Razorpay", "Google Analytics"],
    url: "https://drnamrathasaireddy.in/",
    testimonial: "The website perfectly represents my practice values. Patient bookings have increased significantly, and the professional design builds immediate trust."
  },
  {
    id: 3,
    title: "Footryx Clinics - Podiatry Chain",
    category: "Healthcare", 
    industry: "Medical",
    description: "Multi-location podiatry clinic network with comprehensive foot care services showcase. Advanced appointment management system across multiple clinic locations.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop",
    results: {
      leads: "300+ New Patient Registrations",
      growth: "400% Website Traffic Increase", 
      time: "4 Weeks Complete Setup",
      revenue: "₹20L+ Additional Annual Revenue"
    },
    features: [
      "Multi-location clinic management",
      "Foot care service showcase",
      "Online appointment scheduling",
      "Treatment gallery and testimonials",
      "Insurance and payment options",
      "Specialized equipment information"
    ],
    technologies: ["WordPress", "Multi-site", "Booking Calendar", "Google Maps"],
    url: "https://footryxclinics.com/",
    testimonial: "Grow Beyyond understood our specialized field perfectly. The website showcases our expertise and the appointment system streamlined our operations completely."
  },
  {
    id: 4,
    title: "Astro Today - Complete Astrology Platform",
    category: "Spiritual Services",
    industry: "Consulting",
    description: "Comprehensive astrology platform with consultation booking, horoscope services, and content management. Modern digital approach to traditional astrology services.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    results: {
      leads: "500+ Monthly Consultations",
      growth: "350% Online Booking Increase",
      time: "6 Weeks Platform Development", 
      revenue: "₹15L+ Monthly Platform Revenue"
    },
    features: [
      "Online astrology consultation booking",
      "Personalized horoscope generation",
      "Vedic astrology content library",
      "Multiple consultation formats (chat/call/video)",
      "Payment gateway integration",
      "Astrologer profile management"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Video API"],
    url: "https://astrotoday.net/",
    testimonial: "The platform exceeded expectations. We now serve clients globally, and the automated booking system handles 500+ consultations monthly seamlessly."
  },
  {
    id: 5,
    title: "Dr. Gnaneswar Atturu - Medical Practice",
    category: "Healthcare",
    industry: "Medical", 
    description: "Professional medical practice website with comprehensive patient resources, appointment booking, and medical expertise showcase for specialized healthcare services.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
    results: {
      leads: "120+ Monthly Patient Inquiries",
      growth: "280% Online Presence Growth",
      time: "3 Weeks Launch", 
      revenue: "₹6L+ Monthly Practice Growth"
    },
    features: [
      "Medical expertise showcase",
      "Patient appointment system",
      "Health education resources",
      "Insurance and billing information",
      "Multi-language patient support",
      "Telehealth consultation options"
    ],
    technologies: ["WordPress", "Medical Theme", "Booking Plugin", "WhatsApp"],
    url: "https://drgnaneswaratturu.com/",
    testimonial: "The website perfectly communicates my medical expertise. Patient trust and appointment bookings have increased substantially since launch."
  },
  {
    id: 6,
    title: "Natureland Infra - Real Estate Development",
    category: "Real Estate",
    industry: "Construction",
    description: "Premium real estate and infrastructure development company showcase with project galleries, investment opportunities, and lead generation system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    results: {
      leads: "100+ Quality Investment Inquiries",
      growth: "400% Digital Lead Generation",
      time: "5 Weeks Project Completion",
      revenue: "₹50L+ Pipeline Value Generated"
    },
    features: [
      "Project portfolio showcase",
      "Virtual property tours",
      "Investment calculator tools",
      "Location advantage highlights",
      "Construction progress updates",
      "Investor inquiry management"
    ],
    technologies: ["WordPress", "Real Estate Plugin", "Virtual Tour", "CRM"],
    url: "#",
    testimonial: "Our digital presence now matches our premium projects. The website generates high-quality leads and showcases our developments professionally."
  },
  {
    id: 7,
    title: "Seema Ali - Life Coach & Wellness Expert",
    category: "Wellness",
    industry: "Coaching",
    description: "Personal brand website for life coaching services with session booking, wellness programs, and client transformation showcases. Empowering digital presence for holistic wellness.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    results: {
      leads: "80+ Monthly Coaching Inquiries",
      growth: "300% Personal Brand Growth",
      time: "3 Weeks Brand Launch",
      revenue: "₹5L+ Monthly Coaching Revenue"
    },
    features: [
      "Personal brand storytelling",
      "Coaching session booking system",
      "Wellness program showcases",
      "Client transformation galleries",
      "Blog and wellness content",
      "Online course integration"
    ],
    technologies: ["WordPress", "Coaching Theme", "Booking System", "Content Hub"],
    url: "#",
    testimonial: "My online presence now reflects my coaching expertise perfectly. Client bookings have tripled, and my digital brand attracts the right audience consistently."
  }
]

const categories = ["All", "Healthcare", "Spiritual Services", "Real Estate", "Wellness", "Professional", "E-commerce"]

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