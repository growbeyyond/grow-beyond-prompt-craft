import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { DarkModeToggle } from '@/components/common/DarkModeToggle'
import { Logo } from '@/components/common/Logo'
import { Menu, X, Phone } from 'lucide-react'
import { CONTACT_INFO, getTelUrl, getWhatsAppUrl } from '@/lib/constants'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <Logo variant="full" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeToggle />
            <a href={getTelUrl()} className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              {CONTACT_INFO.phone}
            </a>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="sm" className="shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 border-t border-glass-border mt-2">
                <a href={getTelUrl()} className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-2 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  {CONTACT_INFO.phone}
                </a>
                <a 
                  href={getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full shadow-lg">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}