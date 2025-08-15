import { CheckCircle, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    phase: "Discovery",
    title: "Strategy & Planning",
    description: "We analyze your business, competition, and target audience to create a winning strategy.",
    timeline: "Week 1",
    deliverables: ["Market research", "Competitor analysis", "Strategy document", "Project roadmap"],
    color: "bg-blue-500"
  },
  {
    phase: "Design",
    title: "Creative Development",
    description: "Our design team creates stunning visuals and user experiences that convert visitors into customers.",
    timeline: "Week 2-3",
    deliverables: ["Website mockups", "Brand guidelines", "Creative assets", "User journey maps"],
    color: "bg-purple-500"
  },
  {
    phase: "Develop",
    title: "Technical Implementation",
    description: "We build your website with cutting-edge technology, ensuring speed, security, and scalability.",
    timeline: "Week 3-4",
    deliverables: ["Responsive website", "CMS setup", "Integration setup", "Testing & QA"],
    color: "bg-green-500"
  },
  {
    phase: "Deploy",
    title: "Launch & Optimize",
    description: "We launch your site and immediately start optimizing for better performance and conversions.",
    timeline: "Week 4",
    deliverables: ["Site launch", "Analytics setup", "SEO optimization", "Performance monitoring"],
    color: "bg-orange-500"
  },
  {
    phase: "Grow",
    title: "Ongoing Growth",
    description: "Continuous marketing, optimization, and support to ensure your business keeps growing.",
    timeline: "Ongoing",
    deliverables: ["Monthly reports", "A/B testing", "Content updates", "Technical support"],
    color: "bg-red-500"
  }
]

export const ProcessSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to success in just 4 weeks. Our streamlined process ensures 
            your website launches on time and starts generating results immediately.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-8">
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 text-muted-foreground hidden md:block" />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 glass-card p-8 rounded-2xl border border-glass-border">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <span className="text-sm font-medium text-accent uppercase tracking-wider">
                        {step.phase}
                      </span>
                      <h3 className="text-2xl font-display font-bold mt-1 mb-2">
                        {step.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {step.timeline}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">
                    {step.description}
                  </p>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl border border-glass-border inline-block">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Start Your Growth Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free consultation call and let's discuss how we can grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/growbeyyond/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Free Consultation
              </a>
              <a 
                href="https://wa.me/918886435551?text=Hi%2C%20I%27m%20interested%20in%20growing%20my%20business%20with%20Grow%20Beyyond" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}