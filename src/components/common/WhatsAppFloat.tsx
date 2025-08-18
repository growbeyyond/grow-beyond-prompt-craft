import { useState } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'
import { CONTACT_INFO, getWhatsAppUrl, getTelUrl } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = () => {
    const url = getWhatsAppUrl()
    window.open(url, '_blank')
  }

  const callNow = () => {
    window.location.href = getTelUrl()
  }

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className={`transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} mb-4`}>
          <div className="bg-background/95 backdrop-blur-sm border border-border shadow-lg rounded-2xl p-4 w-72">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-sm">We're Online!</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Get instant support for your Hyderabad business. We typically respond within 5 minutes!
            </p>
            
            <div className="space-y-2">
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
              
              <Button 
                onClick={callNow}
                variant="outline" 
                className="w-full"
                size="sm"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Main Float Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  )
}