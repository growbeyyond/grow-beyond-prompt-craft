import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/animations/ScrollProgress'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { TrendingTechSection } from '@/components/sections/TrendingTechSection'
import { ModernStatsSection } from '@/components/sections/ModernStatsSection'
import { CostCalculator } from '@/components/sections/CostCalculator'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { InteractiveROICalculator } from '@/components/sections/InteractiveROICalculator'
import { WhatsAppFloat } from '@/components/common/WhatsAppFloat'
import { ExitIntentPopup } from '@/components/common/ExitIntentPopup'
import { StickyFloatingCTA } from '@/components/common/StickyFloatingCTA'
import { SocialProofNotifications } from '@/components/common/SocialProofNotifications'
import { ClientLogoWall } from '@/components/common/ClientLogoWall'
import { LiveMetrics } from '@/components/common/LiveMetrics'
import { AdvancedLoadingScreen } from '@/components/common/AdvancedLoadingScreen'
import { AdvancedExitIntent } from '@/components/common/AdvancedExitIntent'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AIChat } from '@/components/common/AIChat'
import { IndustryShowcase } from '@/components/sections/IndustryShowcase'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { SEOHead } from '@/components/common/SEOHead'

const Home = () => {
  return (
    <>
      <AdvancedLoadingScreen />
      <div className="min-h-screen">
        <SEOHead />
        <ScrollProgress />
        <Header />
        <main>
          <HeroSection />
          <ClientLogoWall />
          <ServicesSection />
          <TrendingTechSection />
          <LiveMetrics />
          <ModernStatsSection />
          <InteractiveROICalculator />
          <CostCalculator />
          <PortfolioSection />
          <IndustryShowcase />
          <ProcessSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <StickyFloatingCTA />
        <SocialProofNotifications />
        <AdvancedExitIntent />
        <AIChat />
      </div>
    </>
  )
}

export default Home