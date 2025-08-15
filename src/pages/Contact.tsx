import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      timestamp: new Date().toISOString()
    }

    // In a real app, you would send this to your backend or Make.com webhook
    // For now, we'll simulate the API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      })
      
      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try WhatsApp instead.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to grow your business? We're here to help. Choose how you'd like to connect with us.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <a 
                href="https://wa.me/918886435551?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20Grow%20Beyyond" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg h-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <CardTitle>WhatsApp Us</CardTitle>
                    <CardDescription>Get instant responses on WhatsApp</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-green-500 mb-2">+91 8886435551</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for quick questions</p>
                  </CardContent>
                </Card>
              </a>

              <a 
                href="https://calendly.com/growbeyyond/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg h-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-blue-500" />
                    </div>
                    <CardTitle>Book a Call</CardTitle>
                    <CardDescription>Schedule a free consultation</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold mb-2">Free 30-min Strategy Call</p>
                    <p className="text-sm text-muted-foreground">Perfect for detailed discussions</p>
                  </CardContent>
                </Card>
              </a>

              <a href="tel:+918886435551" className="group">
                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg h-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle>Call Directly</CardTitle>
                    <CardDescription>Speak with our team right now</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-2xl font-bold text-primary mb-2">+91 8886435551</p>
                    <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-7PM IST</p>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="Your full name" 
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          required 
                          placeholder="+91 9876543210" 
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="your@email.com" 
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <select 
                        id="service" 
                        name="service" 
                        className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Development (₹12,000)</option>
                        <option value="marketing">Digital Marketing (₹25,000/month)</option>
                        <option value="automation">Marketing Automation</option>
                        <option value="complete">Complete Growth Package</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Tell us about your business and how we can help you grow..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Contact Information</CardTitle>
                    <CardDescription>Multiple ways to reach us for your convenience.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+918886435551" className="text-muted-foreground hover:text-primary">
                          +91 8886435551
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:directors@growbeyyond.in" className="text-muted-foreground hover:text-accent">
                          directors@growbeyyond.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <a 
                          href="https://wa.me/918886435551" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-green-500"
                        >
                          Chat with us instantly
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-muted-foreground">Mon-Sat: 9AM-7PM IST</p>
                        <p className="text-sm text-muted-foreground">WhatsApp: 24/7 available</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Quick Links */}
                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Questions?</CardTitle>
                    <CardDescription>Common answers to save you time</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">How long does a website take?</span>
                      <span className="text-sm font-medium text-accent">24-48 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Minimum marketing budget?</span>
                      <span className="text-sm font-medium text-accent">₹25,000/month</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Do you work nationwide?</span>
                      <span className="text-sm font-medium text-accent">Yes, all India</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Free consultation?</span>
                      <span className="text-sm font-medium text-accent">Always free</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact