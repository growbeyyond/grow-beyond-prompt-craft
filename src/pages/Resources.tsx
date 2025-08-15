import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Download, Video, FileText, TrendingUp, Clock, User, Star, Gift, Zap, Target } from 'lucide-react'

const resourceCategories = [
  { name: "All", id: "all" },
  { name: "Growth Guides", id: "guides" },
  { name: "Templates", id: "templates" },
  { name: "Success Stories", id: "case-studies" },
  { name: "Video Courses", id: "videos" },
  { name: "Tools & Calculators", id: "tools" }
]

const resources = [
  {
    id: 1,
    title: "Complete Digital Marketing Mastery Guide 2024",
    description: "The ultimate 150-page guide covering everything from website optimization to advanced marketing automation. Used by 500+ businesses to achieve 300%+ growth.",
    category: "guides",
    type: "Premium Guide",
    readTime: "45 min read",
    author: "Arjun Sharma",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: true,
    downloads: "2.5k+",
    value: "₹5,000 Value"
  },
  {
    id: 2,
    title: "Healthcare Marketing Blueprint",
    description: "Specialized guide for doctors and healthcare providers. Learn how to ethically market medical services and build patient trust online.",
    category: "guides", 
    type: "Industry Guide",
    readTime: "30 min read",
    author: "Priya Mehta",
    date: "Jan 2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: true,
    downloads: "1.8k+",
    value: "₹3,000 Value"
  },
  {
    id: 3,
    title: "ROI Calculator Suite - 12 Business Tools",
    description: "Comprehensive collection of calculators for marketing ROI, customer lifetime value, conversion rates, and business growth metrics.",
    category: "tools",
    type: "Calculator Pack",
    readTime: "Interactive",
    author: "Growth Team",
    date: "Dec 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: true,
    downloads: "3.2k+",
    value: "₹7,500 Value"
  },
  {
    id: 4,
    title: "From Zero to ₹50L: Real Estate Digital Success",
    description: "Complete case study of how Natureland Infra generated ₹50L+ in sales through strategic digital marketing in just 6 months.",
    category: "case-studies",
    type: "Success Story",
    readTime: "20 min read",
    author: "Arjun Sharma",
    date: "Dec 2023",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false,
    downloads: "950+",
    value: "₹2,000 Value"
  },
  {
    id: 5,
    title: "Website Conversion Optimization Masterclass",
    description: "90-minute video course covering advanced conversion tactics, A/B testing strategies, and psychological triggers that increase sales by 200%+.",
    category: "videos",
    type: "Video Course",
    readTime: "90 min watch",
    author: "Growth Team",
    date: "Nov 2023",
    image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false,
    downloads: "1.2k+",
    value: "₹8,000 Value"
  },
  {
    id: 6,
    title: "50+ Proven Email Templates That Convert",
    description: "Ready-to-use email templates for welcome sequences, promotional campaigns, and follow-ups. Includes subject lines with 40%+ open rates.",
    category: "templates",
    type: "Template Pack",
    readTime: "15 min setup",
    author: "Priya Mehta",
    date: "Nov 2023",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false,
    downloads: "2.1k+",
    value: "₹4,000 Value"
  },
  {
    id: 7,
    title: "Local SEO Domination Strategy",
    description: "Step-by-step guide to ranking #1 in local search results. Includes Google My Business optimization, local link building, and review management.",
    category: "guides",
    type: "SEO Guide",
    readTime: "35 min read",
    author: "SEO Team",
    date: "Oct 2023",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false,
    downloads: "1.7k+",
    value: "₹3,500 Value"
  },
  {
    id: 8,
    title: "Social Media Content Calendar - 365 Days",
    description: "Complete year's worth of social media content ideas, captions, and hashtags for different industries. Never run out of content ideas again.",
    category: "templates",
    type: "Content Calendar",
    readTime: "10 min setup",
    author: "Creative Team",
    date: "Oct 2023",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
    downloadUrl: "#",
    featured: false,
    downloads: "2.8k+",
    value: "₹6,000 Value"
  }
]

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  
  const featuredResources = resources.filter(resource => resource.featured)
  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Gift className="w-4 h-4" />
                FREE Growth Resources Worth ₹50,000+
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Business Growth <span className="gradient-text">Arsenal</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unlock the same strategies, templates, and tools we use to grow businesses by 300%+. 
                Everything is completely free – no strings attached.
              </p>
            </div>

            {/* Resource Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Premium Resources</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">25k+</div>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
                <div className="text-3xl font-bold gradient-text mb-2">₹50k+</div>
                <p className="text-sm text-muted-foreground">Total Value</p>
              </div>
              <div className="text-center bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg">
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
                <span className="gradient-text">Premium</span> Resources
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our most powerful and comprehensive resources that have helped thousands of businesses achieve breakthrough growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:shadow-2xl hover:scale-105 transition-all duration-500 relative">
                  {/* Premium Badge */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-gradient-to-r from-accent to-primary text-white font-bold px-3 py-1 rotate-12">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      PREMIUM
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur-sm text-xs">
                        {resource.type}
                      </Badge>
                      <Badge className="bg-accent/90 text-accent-foreground text-xs">
                        {resource.value}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloads}
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

                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Get Free Access
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter & All Resources */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Complete <span className="gradient-text">Resource Library</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse our complete collection of growth resources, organized by category and expertise level.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {resourceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-200"
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredResources.map((resource) => {
                const getIcon = (type: string) => {
                  switch (type) {
                    case 'Premium Guide':
                    case 'Industry Guide':
                    case 'SEO Guide':
                      return <BookOpen className="w-4 h-4" />
                    case 'Template Pack':
                    case 'Content Calendar':
                      return <FileText className="w-4 h-4" />
                    case 'Success Story':
                      return <TrendingUp className="w-4 h-4" />
                    case 'Video Course':
                      return <Video className="w-4 h-4" />
                    case 'Calculator Pack':
                      return <Target className="w-4 h-4" />
                    default:
                      return <Zap className="w-4 h-4" />
                  }
                }

                return (
                  <Card key={resource.id} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden group hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="bg-background/90 backdrop-blur-sm flex items-center gap-1 text-xs">
                          {getIcon(resource.type)}
                          {resource.type}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-accent/90 text-accent-foreground text-xs">
                          {resource.value}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-xs leading-relaxed line-clamp-2">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{resource.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          <span>{resource.downloads}</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Download className="w-3 h-3 mr-2" />
                        Download Free
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
            <div className="max-w-3xl mx-auto text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border p-8 shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl lg:text-3xl font-bold">Get New Resources First</CardTitle>
                  <CardDescription className="text-base lg:text-lg">
                    Join 5,000+ business owners who get exclusive access to new resources, case studies, 
                    and growth strategies delivered directly to their inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                    <input
                      type="email"
                      placeholder="Enter your business email"
                      className="flex-1 px-4 py-3 border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button className="px-6 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white">
                      Join Free
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span>✓ Weekly growth tips</span>
                    <span>✓ Exclusive resources</span>
                    <span>✓ No spam ever</span>
                  </div>
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
                Ready for <span className="gradient-text">Personalized Growth</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                While our free resources are powerful, nothing beats a custom strategy designed 
                specifically for your business. Let's create your growth plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://calendly.com/growbeyyond/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="px-8 py-4">
                    Get Custom Strategy
                  </Button>
                </a>
                <a 
                  href="https://wa.me/918886435551?text=Hi%2C%20I%27ve%20downloaded%20your%20resources%20and%20want%20personalized%20help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="px-8 py-4">
                    WhatsApp for Help
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