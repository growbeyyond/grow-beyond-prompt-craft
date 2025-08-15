import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Download, Video, FileText, TrendingUp, Clock, User } from 'lucide-react'

const resourceCategories = [
  { name: "All", id: "all" },
  { name: "Guides", id: "guides" },
  { name: "Templates", id: "templates" },
  { name: "Case Studies", id: "case-studies" },
  { name: "Videos", id: "videos" }
]

const resources = [
  {
    id: 1,
    title: "Complete Guide to Google Ads for Healthcare Providers",
    description: "Step-by-step guide to setting up profitable Google Ads campaigns for doctors, clinics, and healthcare services.",
    category: "guides",
    type: "PDF Guide",
    readTime: "15 min read",
    author: "Priya Mehta",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Website Conversion Checklist for Service Businesses",
    description: "25-point checklist to optimize your website for maximum lead generation and customer conversion.",
    category: "templates",
    type: "Checklist",
    readTime: "10 min read",
    author: "Raj Patel",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false
  },
  {
    id: 3,
    title: "How Dr. Sharma Increased Patient Appointments by 400%",
    description: "Detailed case study showing exactly how we helped a cardiologist grow from 20 to 100+ patients per month.",
    category: "case-studies",
    type: "Case Study",
    readTime: "12 min read",
    author: "Arjun Sharma",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Social Media Content Templates for Education Businesses",
    description: "50+ proven social media post templates specifically designed for coaching institutes and educational services.",
    category: "templates",
    type: "Template Pack",
    readTime: "5 min read",
    author: "Marketing Team",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Real Estate Lead Generation Masterclass",
    description: "60-minute video masterclass on generating high-quality property leads through digital marketing.",
    category: "videos",
    type: "Video Course",
    readTime: "60 min watch",
    author: "Arjun Sharma",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Email Marketing Sequence Templates",
    description: "7-email welcome sequence templates that convert subscribers into paying customers.",
    category: "templates",
    type: "Email Templates",
    readTime: "8 min read",
    author: "Priya Mehta",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false
  },
  {
    id: 7,
    title: "Local SEO Guide for Service Businesses",
    description: "Complete guide to dominating local search results and attracting customers in your area.",
    category: "guides",
    type: "SEO Guide",
    readTime: "20 min read",
    author: "Marketing Team",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false
  },
  {
    id: 8,
    title: "Wellness Center Growth Strategy Case Study",
    description: "How we helped a wellness center chain increase memberships by 180% across multiple locations.",
    category: "case-studies",
    type: "Case Study",
    readTime: "15 min read",
    author: "Arjun Sharma",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false
  }
]

const Resources = () => {
  const featuredResources = resources.filter(resource => resource.featured)
  const allResources = resources.filter(resource => !resource.featured)

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Growth <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Free guides, templates, case studies, and video courses to help you grow your business. 
                Learn from our experience working with 50+ successful businesses.
              </p>
            </div>

            {/* Resource Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Free Resources</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">10k+</div>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Case Studies</p>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl border border-glass-border">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Free Access</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Featured <span className="gradient-text">Resources</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our most popular and impactful resources that have helped hundreds of businesses grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="glass-card border-glass-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed line-clamp-3">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>

                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                All <span className="gradient-text">Resources</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse our complete library of growth resources, organized by category and industry.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {resourceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant="outline"
                  size="sm"
                  className="transition-all duration-200"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allResources.map((resource) => {
                const getIcon = (type: string) => {
                  switch (type) {
                    case 'PDF Guide':
                    case 'SEO Guide':
                      return <BookOpen className="w-5 h-5" />
                    case 'Checklist':
                    case 'Template Pack':
                    case 'Email Templates':
                      return <FileText className="w-5 h-5" />
                    case 'Case Study':
                      return <TrendingUp className="w-5 h-5" />
                    case 'Video Course':
                      return <Video className="w-5 h-5" />
                    default:
                      return <Download className="w-5 h-5" />
                  }
                }

                return (
                  <Card key={resource.id} className="glass-card border-glass-border overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" className="bg-background/90 backdrop-blur-sm flex items-center gap-1">
                          {getIcon(resource.type)}
                          {resource.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed line-clamp-2">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <User className="w-3 h-3" />
                          <span>{resource.author}</span>
                        </div>
                        <span>{resource.date}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{resource.readTime}</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Download className="w-3 h-3 mr-2" />
                        Get Free Access
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="glass-card border-glass-border p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Stay Updated with New Resources</CardTitle>
                  <CardDescription className="text-base">
                    Get notified when we publish new guides, case studies, and growth resources. 
                    Plus, receive exclusive growth tips directly in your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button className="px-6 py-3">
                      Subscribe Free
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    No spam. Unsubscribe anytime. We respect your privacy.
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
                Need Personalized Growth Strategy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                While our free resources are valuable, nothing beats a custom strategy designed 
                specifically for your business. Let's discuss your growth goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    Book Free Strategy Call
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918879394486?text=Hi%2C%20I%27ve%20been%20reading%20your%20resources%20and%20want%20to%20discuss%20a%20custom%20strategy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    WhatsApp for Custom Help
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

export default Resources