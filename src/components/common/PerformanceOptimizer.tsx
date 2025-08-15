import React, { useEffect, useState, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Gauge, 
  Zap, 
  Image, 
  Wifi, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface PerformanceMetrics {
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint  
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
}

interface OptimizationSuggestion {
  id: string
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  category: 'images' | 'scripts' | 'css' | 'network' | 'fonts'
  implemented: boolean
}

export const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 1.2,
    lcp: 2.1,
    fid: 12,
    cls: 0.05,
    ttfb: 0.8
  })
  
  const [overallScore, setOverallScore] = useState(0)
  const [isOptimizing, setIsOptimizing] = useState(false)

  const suggestions: OptimizationSuggestion[] = [
    {
      id: '1',
      title: 'Enable Image Compression',
      description: 'Compress and optimize images to reduce file sizes by up to 70%',
      impact: 'high',
      category: 'images',
      implemented: true
    },
    {
      id: '2',  
      title: 'Implement Lazy Loading',
      description: 'Load images and content only when needed to improve initial page load',
      impact: 'high',
      category: 'images',
      implemented: true
    },
    {
      id: '3',
      title: 'Minify CSS and JavaScript',
      description: 'Remove unnecessary characters to reduce file sizes',
      impact: 'medium',
      category: 'scripts',
      implemented: true
    },
    {
      id: '4',
      title: 'Enable Gzip Compression',
      description: 'Compress files during transfer to reduce bandwidth usage',
      impact: 'high',
      category: 'network',
      implemented: true
    },
    {
      id: '5',
      title: 'Optimize Web Fonts',
      description: 'Use font-display: swap and preload critical fonts',
      impact: 'medium',
      category: 'fonts',
      implemented: false
    },
    {
      id: '6',
      title: 'Reduce Third-party Scripts',
      description: 'Minimize external script dependencies that slow down loading',
      impact: 'medium',
      category: 'scripts',
      implemented: false
    }
  ]

  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    // Google PageSpeed scoring algorithm (simplified)
    const fcpScore = metrics.fcp <= 1.8 ? 100 : Math.max(0, 100 - ((metrics.fcp - 1.8) * 25))
    const lcpScore = metrics.lcp <= 2.5 ? 100 : Math.max(0, 100 - ((metrics.lcp - 2.5) * 20))
    const fidScore = metrics.fid <= 100 ? 100 : Math.max(0, 100 - ((metrics.fid - 100) * 0.3))
    const clsScore = metrics.cls <= 0.1 ? 100 : Math.max(0, 100 - (metrics.cls * 1000))
    const ttfbScore = metrics.ttfb <= 0.8 ? 100 : Math.max(0, 100 - ((metrics.ttfb - 0.8) * 50))
    
    return Math.round((fcpScore + lcpScore + fidScore + clsScore + ttfbScore) / 5)
  }, [])

  useEffect(() => {
    const score = calculateScore(metrics)
    setOverallScore(score)
    
    // Simulate real-time performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        fcp: prev.fcp + (Math.random() - 0.5) * 0.1,
        lcp: prev.lcp + (Math.random() - 0.5) * 0.1,
        fid: Math.max(1, prev.fid + (Math.random() - 0.5) * 5),
        cls: Math.max(0, prev.cls + (Math.random() - 0.5) * 0.01),
        ttfb: Math.max(0.1, prev.ttfb + (Math.random() - 0.5) * 0.1)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [calculateScore, metrics])

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-green-500/20 text-green-700 border-green-500/30">Excellent</Badge>
    if (score >= 50) return <Badge className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">Good</Badge>
    return <Badge className="bg-red-500/20 text-red-700 border-red-500/30">Needs Work</Badge>
  }

  const getMetricStatus = (value: number, threshold: number, lower = true) => {
    const isGood = lower ? value <= threshold : value >= threshold
    return isGood ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <AlertTriangle className="w-4 h-4 text-yellow-500" />
    )
  }

  const handleOptimize = async () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Improve metrics
    setMetrics(prev => ({
      fcp: Math.max(0.8, prev.fcp - 0.3),
      lcp: Math.max(1.2, prev.lcp - 0.4),
      fid: Math.max(5, prev.fid - 5),
      cls: Math.max(0.01, prev.cls - 0.02),
      ttfb: Math.max(0.4, prev.ttfb - 0.2)
    }))
    
    setIsOptimizing(false)
  }

  const implementedCount = suggestions.filter(s => s.implemented).length

  return (
    <div className="space-y-6">
      {/* Performance Score */}
      <Card className="glass-card-premium">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Gauge className="w-6 h-6" />
            Performance Score
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            <div className={cn("text-6xl font-bold mb-2", getScoreColor(overallScore))}>
              {overallScore}
            </div>
            {getScoreBadge(overallScore)}
          </div>
          
          <Progress 
            value={overallScore} 
            className="h-3 mb-4"
          />
          
          <p className="text-muted-foreground text-sm">
            Based on Core Web Vitals and performance metrics
          </p>
        </CardContent>
      </Card>

      {/* Core Web Vitals */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Core Web Vitals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                {getMetricStatus(metrics.fcp, 1.8)}
              </div>
              <div className="text-2xl font-bold text-foreground">{metrics.fcp.toFixed(1)}s</div>
              <div className="text-xs text-muted-foreground">First Contentful Paint</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Image className="w-4 h-4 text-primary" />
                {getMetricStatus(metrics.lcp, 2.5)}
              </div>
              <div className="text-2xl font-bold text-foreground">{metrics.lcp.toFixed(1)}s</div>
              <div className="text-xs text-muted-foreground">Largest Contentful Paint</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-primary" />
                {getMetricStatus(metrics.fid, 100)}
              </div>
              <div className="text-2xl font-bold text-foreground">{Math.round(metrics.fid)}ms</div>
              <div className="text-xs text-muted-foreground">First Input Delay</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                {getMetricStatus(metrics.cls, 0.1)}
              </div>
              <div className="text-2xl font-bold text-foreground">{metrics.cls.toFixed(3)}</div>
              <div className="text-xs text-muted-foreground">Cumulative Layout Shift</div>
            </div>
            
            <div className="text-center p-3 glass-card rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-primary" />
                {getMetricStatus(metrics.ttfb, 0.8)}
              </div>
              <div className="text-2xl font-bold text-foreground">{metrics.ttfb.toFixed(1)}s</div>
              <div className="text-xs text-muted-foreground">Time to First Byte</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Optimization Status */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Optimization Status
            </span>
            <Badge variant="outline">
              {implementedCount}/{suggestions.length} Implemented
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center justify-between p-3 glass-card rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {suggestion.implemented ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                  )}
                  <div>
                    <div className="font-medium text-foreground">{suggestion.title}</div>
                    <div className="text-sm text-muted-foreground">{suggestion.description}</div>
                  </div>
                </div>
                
                <Badge
                  variant="outline"
                  className={cn(
                    suggestion.impact === 'high' && "border-red-500/30 text-red-700",
                    suggestion.impact === 'medium' && "border-yellow-500/30 text-yellow-700",
                    suggestion.impact === 'low' && "border-green-500/30 text-green-700"
                  )}
                >
                  {suggestion.impact} impact
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}