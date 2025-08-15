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
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { SEOHead } from '@/components/common/SEOHead'
import { StructuredData } from '@/components/seo/StructuredData'
import { LiveChatIndicator } from '@/components/common/LiveChatIndicator'
import { PerformanceMonitor } from '@/components/analytics/PerformanceMonitor'
import { VideoTestimonials } from '@/components/optimization/VideoTestimonials'

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
          <ServicesSection />
          <PerformanceMonitor />
          <ModernStatsSection />
          <PortfolioSection />
          <VideoTestimonials />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <LiveChatIndicator />
        <SocialProofNotifications />
        <StructuredData type="organization" data={{}} />
        <StructuredData type="localBusiness" data={{}} />
        <StructuredData type="service" data={{}} />
      </div>
    </>
  )
}

export default Home