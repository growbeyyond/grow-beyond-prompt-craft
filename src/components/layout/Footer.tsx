import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="hero-gradient border-t border-glass-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Grow Beyyond
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Service websites from ₹12,000. Full growth packages from ₹25,000/month. 
              Lead generation systems that convert prospects into customers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <a href="tel:+918879394486" className="hover:text-accent transition-colors">
                  +91 8879394486
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <a href="mailto:hello@growbeyyond.com" className="hover:text-accent transition-colors">
                  hello@growbeyyond.com
                </a>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-3 text-accent" />
                <span>Mon-Sat: 9AM-7PM IST</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services" className="hover:text-accent transition-colors">Website Development</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Social Media Marketing</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Google Ads Management</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Lead Generation</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Creative Design</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Marketing Automation</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/industries" className="hover:text-accent transition-colors">Healthcare & Doctors</a></li>
              <li><a href="/industries" className="hover:text-accent transition-colors">Education & Coaching</a></li>
              <li><a href="/industries" className="hover:text-accent transition-colors">Real Estate</a></li>
              <li><a href="/industries" className="hover:text-accent transition-colors">Wellness & Fitness</a></li>
              <li><a href="/industries" className="hover:text-accent transition-colors">Professional Services</a></li>
              <li><a href="/industries" className="hover:text-accent transition-colors">E-commerce</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Grow Beyyond. All rights reserved. | 
            <a href="/privacy" className="hover:text-accent transition-colors ml-1">Privacy Policy</a> | 
            <a href="/terms" className="hover:text-accent transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}