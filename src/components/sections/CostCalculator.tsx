import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Calculator, IndianRupee, Send } from 'lucide-react'

const services = [
  { id: 'website', name: 'Professional Website', price: 12000, trending: false },
  { id: 'whatsapp', name: 'WhatsApp Business Automation', price: 8000, trending: true },
  { id: 'reels', name: 'Instagram Reels & YouTube Shorts', price: 15000, trending: true },
  { id: 'chatbot', name: 'AI Chatbot Development', price: 20000, trending: true },
  { id: 'seo', name: 'Hyderabad Local SEO', price: 10000, trending: false },
  { id: 'content', name: 'Regional Language Content', price: 12000, trending: true },
]

const addOns = [
  { id: 'ecommerce', name: 'E-commerce Integration', price: 8000 },
  { id: 'analytics', name: 'Advanced Analytics Setup', price: 5000 },
  { id: 'maintenance', name: 'Monthly Maintenance (6 months)', price: 3000 },
]

export const CostCalculator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [businessName, setBusinessName] = useState('')
  const [showQuote, setShowQuote] = useState(false)

  const calculateTotal = () => {
    const serviceTotal = services
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0)
    
    const addOnTotal = addOns
      .filter(addOn => selectedAddOns.includes(addOn.id))
      .reduce((sum, addOn) => sum + addOn.price, 0)
    
    return serviceTotal + addOnTotal
  }

  const sendQuote = () => {
    const selectedServiceNames = services
      .filter(service => selectedServices.includes(service.id))
      .map(service => service.name)
    
    const selectedAddOnNames = addOns
      .filter(addOn => selectedAddOns.includes(addOn.id))
      .map(addOn => addOn.name)
    
    const total = calculateTotal()
    const message = `Hi! I'd like a quote for my business "${businessName}". 

Selected Services:
${selectedServiceNames.map(name => `• ${name}`).join('\n')}

${selectedAddOnNames.length > 0 ? `Add-ons:
${selectedAddOnNames.map(name => `• ${name}`).join('\n')}` : ''}

Estimated Total: ₹${total.toLocaleString('en-IN')}

Please send me a detailed proposal for my Hyderabad business.`

    const whatsappUrl = `https://wa.me/918886435551?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Cost Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get an instant estimate for your Hyderabad business growth package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Build Your Custom Package
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="business-name">Your Business Name</Label>
                <Input
                  id="business-name"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <h3 className="font-semibold mb-4">Select Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                      <Checkbox
                        id={service.id}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedServices([...selectedServices, service.id])
                          } else {
                            setSelectedServices(selectedServices.filter(id => id !== service.id))
                          }
                        }}
                      />
                      <div className="flex-1">
                        <label htmlFor={service.id} className="cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{service.name}</span>
                            {service.trending && (
                              <span className="text-xs bg-orange-500 text-white px-1 py-0.5 rounded">🔥</span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <IndianRupee className="w-3 h-3" />
                            {service.price.toLocaleString('en-IN')}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Add-ons</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors">
                      <Checkbox
                        id={addOn.id}
                        checked={selectedAddOns.includes(addOn.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedAddOns([...selectedAddOns, addOn.id])
                          } else {
                            setSelectedAddOns(selectedAddOns.filter(id => id !== addOn.id))
                          }
                        }}
                      />
                      <div className="flex-1">
                        <label htmlFor={addOn.id} className="cursor-pointer">
                          <div className="font-medium">{addOn.name}</div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <IndianRupee className="w-3 h-3" />
                            {addOn.price.toLocaleString('en-IN')}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {(selectedServices.length > 0 || selectedAddOns.length > 0) && (
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between text-lg font-semibold mb-4">
                    <span>Estimated Total:</span>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-5 h-5" />
                      <span className="gradient-text">{calculateTotal().toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={sendQuote}
                    disabled={!businessName.trim()}
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Get Detailed Quote on WhatsApp
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    *Final pricing may vary based on specific requirements. GST applicable.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}