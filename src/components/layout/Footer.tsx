import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO, BRAND_INFO, getEmailUrl, getTelUrl, getWhatsAppUrl, getFullAddress } from '@/lib/constants'

export const Footer = () => {
  return (
    <footer className="hero-gradient border-t border-glass-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              {BRAND_INFO.name}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {BRAND_INFO.description}. Based in {BRAND_INFO.location}.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-accent" />
                <a href={getTelUrl()} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-accent" />
                <a href={getEmailUrl()} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-accent" />
                <span>{getFullAddress()}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 mr-3 text-accent" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services" className="hover:text-accent transition-colors">Website Development</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">WhatsApp Business Automation</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Instagram Reels & YouTube Shorts</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">AI Chatbot Development</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Hyderabad Local SEO</a></li>
              <li><a href="/services" className="hover:text-accent transition-colors">Regional Language Content</a></li>
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