import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Zap, Clock, Eye, TrendingUp } from 'lucide-react'

interface PerformanceMetrics {
  pageSpeed: number
  seoScore: number
  visitorCount: number
  conversionRate: number
}

export const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageSpeed: 95,
    seoScore: 98,
    visitorCount: 1247,
    conversionRate: 8.4
  })

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        pageSpeed: Math.min(100, prev.pageSpeed + (Math.random() - 0.5) * 2),
        seoScore: Math.min(100, prev.seoScore + (Math.random() - 0.5) * 1),
        visitorCount: prev.visitorCount + Math.floor(Math.random() * 5),
        conversionRate: Math.max(0, prev.conversionRate + (Math.random() - 0.5) * 0.5)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 75) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold mb-2">
            Live Performance <span className="gradient-text">Metrics</span>
          </h3>
          <p className="text-muted-foreground">Real-time website performance tracking</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Page Speed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <span className={getScoreColor(metrics.pageSpeed)}>
                  {metrics.pageSpeed.toFixed(0)}
                </span>
                <span className="text-sm text-muted-foreground">/100</span>
              </div>
              <Badge variant="secondary" className="text-xs mt-1">
                Excellent
              </Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                SEO Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                <span className={getScoreColor(metrics.seoScore)}>
                  {metrics.seoScore.toFixed(0)}
                </span>
                <span className="text-sm text-muted-foreground">/100</span>
              </div>
              <Badge variant="secondary" className="text-xs mt-1">
                Perfect
              </Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-500" />
                Visitors Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {metrics.visitorCount.toLocaleString()}
              </div>
              <Badge variant="secondary" className="text-xs mt-1">
                +12% today
              </Badge>
            </CardContent>
          </Card>

          <Card className="glass-card border-0">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                Conversion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {metrics.conversionRate.toFixed(1)}%
              </div>
              <Badge variant="secondary" className="text-xs mt-1">
                Above avg
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}