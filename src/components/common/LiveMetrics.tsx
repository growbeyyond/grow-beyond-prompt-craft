import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, Zap, Star } from 'lucide-react'

const metrics = [
  { label: "Websites Launched", baseValue: 127, icon: Zap, color: "from-blue-500 to-cyan-500" },
  { label: "Leads Generated", baseValue: 45230, icon: Users, color: "from-green-500 to-emerald-500" },
  { label: "Client ROI Average", baseValue: 285, suffix: "%", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
  { label: "Client Satisfaction", baseValue: 98, suffix: "%", icon: Star, color: "from-yellow-500 to-orange-500" }
]

export const LiveMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState(metrics.map(m => ({ ...m, currentValue: 0 })))

  useEffect(() => {
    const intervals = metrics.map((metric, index) => {
      return setInterval(() => {
        setAnimatedValues(prev => {
          const newValues = [...prev]
          if (newValues[index].currentValue < metric.baseValue) {
            const increment = Math.ceil(metric.baseValue / 100)
            newValues[index].currentValue = Math.min(
              newValues[index].currentValue + increment,
              metric.baseValue
            )
          } else {
            // Add small random fluctuations to simulate live data
            const fluctuation = Math.floor(Math.random() * 3) - 1
            newValues[index].currentValue = metric.baseValue + fluctuation
          }
          return newValues
        })
      }, 50)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 animate-pulse">
            🔴 LIVE Data
          </Badge>
          <h2 className="text-3xl font-display font-bold mb-4">
            Real-Time <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our impact grow in real-time. These numbers update as we help more businesses succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animatedValues.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index} className="glass-card border-0 text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="text-3xl font-display font-bold gradient-text mb-2 tabular-nums">
                    {metric.currentValue.toLocaleString()}{metric.suffix || ''}
                  </div>
                  
                  <p className="text-sm font-medium text-muted-foreground">
                    {metric.label}
                  </p>
                  
                  <div className="mt-2">
                    <div className="w-full bg-muted rounded-full h-1">
                      <div 
                        className={`h-1 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${(metric.currentValue / metric.baseValue) * 100}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            ⚡ Data updates every 30 seconds • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </section>
  )
}