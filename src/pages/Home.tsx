import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AutomationSection } from '@/components/sections/AutomationSection'
import { PricingSection } from '@/components/sections/PricingSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <PricingSection />
    </div>
  )
}

export default Home