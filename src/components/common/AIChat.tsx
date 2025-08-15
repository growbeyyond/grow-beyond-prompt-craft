import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, Send, Bot, User, Minimize2, Maximize2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

interface AIChatProps {
  className?: string
}

export const AIChat: React.FC<AIChatProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm your digital growth assistant. I can help you understand how Grow Beyyond can transform your business. What would you like to know?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickResponses = [
    "What services do you offer?",
    "How much does a website cost?",
    "Can you help with digital marketing?",
    "What's your turnaround time?",
    "Do you offer maintenance?"
  ]

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('service') || message.includes('offer')) {
      return "We offer comprehensive digital solutions including AI-powered websites, digital marketing, Google Ads management, SEO optimization, and lead generation automation. Each solution is designed to grow your business beyond expectations!"
    }
    
    if (message.includes('cost') || message.includes('price') || message.includes('budget')) {
      return "Our pricing is tailored to your specific needs! Website packages start from ₹40,000 with our current exclusive offer (normally ₹65,000). This includes a complete website in 24 hours, Google Ads setup, and 3 months free maintenance. Would you like to schedule a free consultation to discuss your requirements?"
    }
    
    if (message.includes('marketing') || message.includes('ads')) {
      return "Absolutely! We specialize in digital marketing that delivers results. Our services include Google Ads management, social media marketing, content creation, and lead generation automation. Our clients typically see 200-400% increase in leads within 90 days!"
    }
    
    if (message.includes('time') || message.includes('quick') || message.includes('fast')) {
      return "Speed is our specialty! We deliver complete websites in just 24 hours. Our rapid deployment process ensures you can start generating leads immediately. Most of our clients are amazed by how quickly we can transform their online presence!"
    }
    
    if (message.includes('maintenance') || message.includes('support')) {
      return "Yes! We provide 24/7 support and maintenance. This includes regular updates, security monitoring, backup management, and performance optimization. Our premium packages include 3 months of free maintenance, and we offer ongoing support plans to keep your website running perfectly."
    }
    
    if (message.includes('hello') || message.includes('hi')) {
      return "Hello! Great to meet you! I'm here to help you understand how Grow Beyyond can accelerate your business growth. Are you looking to build a new website, improve your digital marketing, or perhaps both?"
    }
    
    return "That's a great question! I'd love to connect you with our expert team who can provide detailed information specific to your needs. You can book a free consultation or message us on WhatsApp for immediate assistance. What would you prefer?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(inputValue),
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const handleQuickResponse = (response: string) => {
    setInputValue(response)
    handleSendMessage()
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full btn-premium shadow-glow animate-pulse-premium"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={cn(
              "fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]",
              isMinimized && "h-16",
              className
            )}
          >
            <Card className="glass-card-premium h-full max-h-[32rem] flex flex-col">
              {/* Header */}
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Growth Assistant</CardTitle>
                    <p className="text-xs text-muted-foreground">Online now</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex gap-3",
                          message.type === 'user' ? "justify-end" : "justify-start"
                        )}
                      >
                        {message.type === 'bot' && (
                          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        
                        <div
                          className={cn(
                            "max-w-[80%] p-3 rounded-2xl text-sm",
                            message.type === 'user'
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {message.content}
                        </div>
                        
                        {message.type === 'user' && (
                          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-muted p-3 rounded-2xl">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </CardContent>

                  {/* Quick Responses */}
                  {messages.length === 1 && (
                    <div className="px-4 pb-2">
                      <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                      <div className="flex flex-wrap gap-1">
                        {quickResponses.slice(0, 3).map((response, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-7"
                            onClick={() => handleQuickResponse(response)}
                          >
                            {response}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input */}
                  <div className="p-4 border-t border-border/50">
                    <div className="flex gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="sm" className="px-3">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}