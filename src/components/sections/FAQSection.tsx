import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can you deliver a website?",
    answer: "We deliver most websites within 24-48 hours after receiving all content and requirements. Complex e-commerce or custom functionality may take 3-7 days. Our rapid delivery is possible because we use proven templates and streamlined processes while ensuring quality."
  },
  {
    question: "What's included in the ₹12,000 website package?",
    answer: "Our basic package includes: responsive website design, up to 5 pages, contact forms, basic SEO setup, mobile optimization, 1 year hosting, SSL certificate, and 3 months of technical support. Additional pages, e-commerce functionality, and custom features are available at extra cost."
  },
  {
    question: "How do you generate leads for my business?",
    answer: "We use a multi-channel approach: Google Ads for immediate visibility, SEO for long-term organic growth, social media marketing for engagement, content marketing for authority building, and marketing automation for lead nurturing. Each strategy is customized to your industry and target audience."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in healthcare (doctors, clinics), education (coaching institutes, schools), real estate, wellness & fitness, professional services (CA, lawyers), and e-commerce. We understand the unique challenges and opportunities in each sector and tailor our strategies accordingly."
  },
  {
    question: "Do you provide ongoing support after website launch?",
    answer: "Yes, all our packages include ongoing support. Website packages include 3 months of technical support. Growth packages (₹25,000/month) include continuous optimization, monthly reporting, content updates, technical maintenance, and dedicated account management."
  },
  {
    question: "Can you help with existing websites or only new ones?",
    answer: "We can work with both! We offer website redesign services, conversion optimization for existing sites, and can integrate our marketing services with any platform. We'll audit your current site and recommend the best approach for maximum ROI."
  },
  {
    question: "How do you measure and report results?",
    answer: "We provide detailed monthly reports covering website traffic, lead generation, conversion rates, campaign performance, and ROI. You'll have access to a client dashboard with real-time metrics, and we schedule monthly review calls to discuss performance and strategy adjustments."
  },
  {
    question: "What makes you different from other agencies?",
    answer: "Three key differentiators: 1) Industry specialization - we understand your specific market challenges, 2) Rapid delivery - websites in 24 hours, campaigns live in 48 hours, 3) Results focus - we guarantee lead generation improvements or work for free until we achieve results."
  },
  {
    question: "Do you offer payment plans or only full payment?",
    answer: "We offer flexible payment options: 50% advance + 50% on delivery for websites, monthly payments for ongoing growth packages, and special advance payment discounts (pay 6 months in advance, get 2 months free). Payment methods include bank transfer, UPI, and online payment gateways."
  },
  {
    question: "Can you guarantee specific results?",
    answer: "While we can't guarantee exact numbers (no ethical agency can), we do guarantee improvement over your current performance. If we don't increase your leads within 90 days of starting our growth package, we'll work for free until we do. We're confident because our average client sees 200-400% improvement."
  }
]

export const FAQSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            business owners ask before starting their growth journey with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-glass-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl border border-glass-border inline-block">
            <h3 className="text-2xl font-display font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll answer all your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918879394486"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Call +91 8879394486
              </a>
              <a 
                href="https://wa.me/918879394486?text=Hi%2C%20I%20have%20some%20questions%20about%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
              >
                WhatsApp Questions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}