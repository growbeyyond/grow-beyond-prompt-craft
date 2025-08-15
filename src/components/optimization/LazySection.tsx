import React, { lazy, Suspense } from 'react'

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <div className="py-20 flex items-center justify-center"><div className="animate-pulse">Loading...</div></div> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Lazy loaded components for better performance
export const LazyClientLogoWall = lazy(() => import('../common/ClientLogoWall').then(module => ({ default: module.ClientLogoWall })))
export const LazyTrendingTechSection = lazy(() => import('../sections/TrendingTechSection').then(module => ({ default: module.TrendingTechSection })))
export const LazyInteractiveROICalculator = lazy(() => import('../sections/InteractiveROICalculator').then(module => ({ default: module.InteractiveROICalculator })))
export const LazyCostCalculator = lazy(() => import('../sections/CostCalculator').then(module => ({ default: module.CostCalculator })))
export const LazyIndustryShowcase = lazy(() => import('../sections/IndustryShowcase').then(module => ({ default: module.IndustryShowcase })))
export const LazyProcessSection = lazy(() => import('../sections/ProcessSection').then(module => ({ default: module.ProcessSection })))
export const LazyLiveMetrics = lazy(() => import('../common/LiveMetrics').then(module => ({ default: module.LiveMetrics })))