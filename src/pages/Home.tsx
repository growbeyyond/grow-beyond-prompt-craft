import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CostCalculator } from '@/components/sections/CostCalculator'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { WhatsAppFloat } from '@/components/common/WhatsAppFloat'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CostCalculator />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Home