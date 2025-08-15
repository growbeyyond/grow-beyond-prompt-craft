import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, TrendingUp, Users, Clock, Filter, Star, Trophy } from 'lucide-react'

const portfolioProjects = [
  {
    id: 1,
    title: "Healthcare Revolution - Dr. Sindhu Pericherla",
    category: "Healthcare",
    industry: "Medical",
    description: "Transformed a leading oncologist's practice with AI-powered patient management, advanced booking systems, and comprehensive digital presence that revolutionized patient care.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    results: {
      leads: "500+ Monthly Patient Inquiries",
      growth: "450% Digital Visibility Increase",
      time: "Launch in 2 Weeks",
      revenue: "₹25L+ Monthly Practice Growth"
    },
    features: [
      "AI-powered patient scheduling system",
      "Telemedicine integration platform",
      "Comprehensive cancer care portal",
      "Advanced SEO for medical keywords",
      "Multi-language patient support",
      "Automated follow-up sequences"
    ],
    technologies: ["React", "Node.js", "AI Integration", "Telemedicine API"],
    url: "https://drsindhupericherlaonco.in/",
    testimonial: "This digital transformation exceeded all expectations. Patient satisfaction increased by 90% and our practice efficiency improved dramatically.",
    featured: true
  },
  {
    id: 2,
    title: "Premium Real Estate Empire - Natureland Infra",
    category: "Real Estate",
    industry: "Construction", 
    description: "Created a luxury real estate platform with virtual tours, investment calculators, and advanced lead management that generated ₹100Cr+ in pipeline value.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    results: {
      leads: "300+ Premium Investors Monthly",
      growth: "600% Quality Lead Generation",
      time: "Platform Live in 4 Weeks",
      revenue: "₹100Cr+ Pipeline Generated"
    },
    features: [
      "Virtual 3D property tours",
      "Advanced investment calculators",
      "CRM with lead scoring",
      "Automated investor updates",
      "Premium project showcases",
      "Location advantage analytics"
    ],
    technologies: ["WordPress", "3D Tours", "CRM Integration", "Analytics"],
    url: "#",
    testimonial: "Our digital presence now matches our premium developments. The automated systems handle hundreds of investors seamlessly.",
    featured: true
  },
  {
    id: 3,
    title: "E-Learning Empire - Elite Coaching Network",
    category: "Education",
    industry: "EdTech",
    description: "Built a comprehensive education platform with online courses, student management, and advanced analytics that enrolled 2000+ students in 6 months.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    results: {
      leads: "2000+ Student Enrollments",
      growth: "400% Course Completion Rates",
      time: "Platform Ready in 5 Weeks", 
      revenue: "₹50L+ Monthly Course Revenue"
    },
    features: [
      "Interactive online course platform",
      "Student progress tracking",
      "Automated certificate generation",
      "Parent-student communication portal",
      "Advanced analytics dashboard",
      "Multi-format content delivery"
    ],
    technologies: ["React", "Learning Management System", "Video Streaming", "Analytics"],
    url: "#",
    testimonial: "The platform transformed our teaching approach. Student engagement and results improved significantly with the interactive features.",
    featured: true
  }
]

const allProjects = [
  ...portfolioProjects,
  {
    id: 4,
    title: "Wellness Transformation - Premium Spa Chain",
    category: "Wellness",
    industry: "Health & Beauty",
    description: "Complete digital makeover for a luxury spa chain with booking systems, membership management, and personalized wellness programs.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    results: {
      leads: "200+ Premium Memberships",
      growth: "300% Booking Increase",
      time: "System Live in 3 Weeks",
      revenue: "₹15L+ Monthly Revenue Growth"
    },
    features: [
      "Luxury spa booking system",
      "Membership management platform",
      "Personalized wellness programs",
      "Automated appointment reminders",
      "Premium customer portal",
      "Inventory management system"
    ],
    technologies: ["WordPress", "Booking System", "CRM", "Inventory Management"],
    url: "#",
    testimonial: "Our spa business reached new heights with this digital transformation. Client satisfaction and retention improved dramatically.",
    featured: false
  },
  {
    id: 5,
    title: "Professional Services Excellence - CA Firm",
    category: "Professional Services",
    industry: "Financial Services",
    description: "Enhanced digital presence for a chartered accountancy firm with client portals, document management, and automated workflows.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    results: {
      leads: "100+ Business Clients",
      growth: "250% Service Inquiries",
      time: "Portal Live in 3 Weeks",
      revenue: "₹20L+ Additional Annual Revenue"
    },
    features: [
      "Secure client document portal",
      "Automated compliance tracking",
      "Service request management",
      "Financial report generation",
      "Client communication system",
      "Professional credentials showcase"
    ],
    technologies: ["WordPress", "Document Management", "Security Features", "Analytics"],
    url: "#",
    testimonial: "The client portal revolutionized our service delivery. We now handle 3x more clients with the same team size.",
    featured: false
  }
]

const categories = ["All", "Healthcare", "Real Estate", "Education", "Wellness", "Professional Services"]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Success <span className="gradient-text">Stories</span> That Inspire
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real businesses, real growth, real results. Discover how we've helped companies 
                across industries achieve extraordinary digital transformation and sustainable growth.
              </p>
            </div>

            {/* Overall Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">₹50Cr+</div>
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

        {/* Featured Success Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Featured <span className="gradient-text">Transformations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our most impactful success stories that showcase the power of strategic digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {portfolioProjects.map((project) => (
                <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-accent text-accent-foreground font-bold">
                        <Trophy className="w-3 h-3 mr-1" />
                        FEATURED
                      </Badge>
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
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
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Outstanding Results
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="block font-medium text-foreground">{project.results.leads}</span>
                        </div>
                        <div>
                          <span className="block font-medium text-foreground">{project.results.growth}</span>
                        </div>
                        <div>
                          <span className="block font-medium text-foreground">{project.results.time}</span>
                        </div>
                        <div>
                          <span className="block font-medium text-foreground">{project.results.revenue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span className="font-semibold text-accent text-sm">Client Success</span>
                      </div>
                      <p className="text-sm italic text-muted-foreground">"{project.testimonial}"</p>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Complete Case Study <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Explore by Industry:</span>
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

        {/* All Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Complete <span className="gradient-text">Portfolio</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse our complete collection of successful projects across various industries and business sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.featured && (
                        <Badge className="bg-accent text-accent-foreground font-bold">
                          <Trophy className="w-3 h-3 mr-1" />
                          FEATURED
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                        {project.category}
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
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Results
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="block font-medium text-foreground">{project.results.leads}</span>
                        </div>
                        <div>
                          <span className="block font-medium text-foreground">{project.results.growth}</span>
                        </div>
                        <div>
                          <span className="block font-medium text-foreground">{project.results.time}</span>
                        </div>
                        <div>
                          <span className="block font-medium text-foreground">{project.results.revenue}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Implementation Highlights</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {project.features.length > 3 && (
                          <span className="text-xs text-accent ml-4 font-medium">
                            +{project.features.length - 3} more advanced features
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore Full Case Study <ExternalLink className="w-4 h-4 ml-2" />
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Ready to Be Our Next <span className="gradient-text">Success Story</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the ranks of successful businesses who've transformed their growth with our proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="px-8 py-4">
                    Start Your Success Story
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918886435551?text=Hi%2C%20I%27d%20like%20to%20discuss%20growing%20my%20business%20like%20your%20success%20stories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    Get Growth Strategy
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