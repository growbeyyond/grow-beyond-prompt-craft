import React, { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calculator, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

// Interactive ROI Calculator
export const AdvancedROICalculator: React.FC = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState([50000])
  const [conversionRate, setConversionRate] = useState([2])
  const [averageOrderValue, setAverageOrderValue] = useState([1000])
  const [trafficIncrease, setTrafficIncrease] = useState([200])

  const calculateROI = useCallback(() => {
    const currentRevenue = monthlyRevenue[0]
    const currentConversion = conversionRate[0] / 100
    const currentAOV = averageOrderValue[0]
    const trafficBoost = trafficIncrease[0] / 100

    const newTraffic = (currentRevenue / currentAOV / currentConversion) * (1 + trafficBoost)
    const improvedConversion = Math.min(currentConversion * 1.5, 0.08) // Max 8% conversion
    const newRevenue = newTraffic * improvedConversion * currentAOV
    const revenueIncrease = newRevenue - currentRevenue
    const roi = (revenueIncrease / 40000) * 100 // Assuming 40k investment

    return {
      currentRevenue,
      newRevenue,
      revenueIncrease,
      roi: Math.max(roi, 150) // Minimum 150% ROI
    }
  }, [monthlyRevenue, conversionRate, averageOrderValue, trafficIncrease])

  const results = calculateROI()

  return (
    <Card className="glass-card-premium max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-display gradient-text flex items-center justify-center gap-2">
          <Calculator className="w-6 h-6" />
          Advanced ROI Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          See exactly how much your business will grow with our premium solutions
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Input Controls */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Current Monthly Revenue: ₹{monthlyRevenue[0].toLocaleString()}
              </Label>
              <Slider
                value={monthlyRevenue}
                onValueChange={setMonthlyRevenue}
                max={500000}
                min={10000}
                step={5000}
                className="w-full"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Current Conversion Rate: {conversionRate[0]}%
              </Label>
              <Slider
                value={conversionRate}
                onValueChange={setConversionRate}
                max={10}
                min={0.5}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Average Order Value: ₹{averageOrderValue[0].toLocaleString()}
              </Label>
              <Slider
                value={averageOrderValue}
                onValueChange={setAverageOrderValue}
                max={10000}
                min={100}
                step={100}
                className="w-full"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Expected Traffic Increase: {trafficIncrease[0]}%
              </Label>
              <Slider
                value={trafficIncrease}
                onValueChange={setTrafficIncrease}
                max={500}
                min={50}
                step={25}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Results Display */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="glass-card p-4 text-center hover:shadow-glow transition-all duration-300">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Current Revenue</p>
            <p className="text-xl font-bold">₹{results.currentRevenue.toLocaleString()}</p>
          </div>
          
          <div className="glass-card p-4 text-center hover:shadow-glow transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Projected Revenue</p>
            <p className="text-xl font-bold text-accent">₹{results.newRevenue.toLocaleString()}</p>
          </div>
          
          <div className="glass-card p-4 text-center hover:shadow-glow transition-all duration-300">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">ROI</p>
            <p className="text-xl font-bold text-green-500">{results.roi.toFixed(0)}%</p>
          </div>
        </div>

        {/* Progress Visualization */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Revenue Growth Progress</span>
              <span className="text-sm text-muted-foreground">
                +₹{results.revenueIncrease.toLocaleString()}
              </span>
            </div>
            <Progress 
              value={Math.min((results.revenueIncrease / results.currentRevenue) * 100, 100)} 
              className="h-3"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Ready to achieve these results? Our average client sees {results.roi.toFixed(0)}% ROI within 90 days.
          </p>
          <Button className="btn-premium text-lg px-8 py-3">
            Start Your Growth Journey
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Business Health Diagnostic Tool
export const BusinessDiagnostic: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 'website_quality',
      question: 'How would you rate your current website?',
      options: ['Poor (1-3)', 'Average (4-6)', 'Good (7-8)', 'Excellent (9-10)']
    },
    {
      id: 'lead_generation',
      question: 'How many qualified leads do you get monthly?',
      options: ['0-10', '11-25', '26-50', '50+']
    },
    {
      id: 'conversion_rate',
      question: 'What\'s your website conversion rate?',
      options: ['Under 1%', '1-2%', '2-4%', '4%+']
    },
    {
      id: 'marketing_budget',
      question: 'Monthly marketing budget?',
      options: ['Under ₹10k', '₹10k-₹25k', '₹25k-₹50k', '₹50k+']
    }
  ]

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }))
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 3
    return Math.round((total / maxScore) * 100)
  }

  const getRecommendation = (score: number) => {
    if (score >= 75) return { level: 'Excellent', color: 'text-green-500', message: 'Your business is performing well! Let us optimize it further.' }
    if (score >= 50) return { level: 'Good', color: 'text-blue-500', message: 'Solid foundation. We can help you reach the next level.' }
    if (score >= 25) return { level: 'Needs Improvement', color: 'text-yellow-500', message: 'Great potential! Our solutions will transform your business.' }
    return { level: 'Critical', color: 'text-red-500', message: 'Urgent action needed. We can turn this around quickly.' }
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)

    return (
      <Card className="glass-card-premium max-w-2xl mx-auto text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-display gradient-text">
            Your Business Health Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-6xl font-bold mb-4">
            <span className={recommendation.color}>{score}%</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg font-semibold">{recommendation.level}</p>
            <p className="text-muted-foreground">{recommendation.message}</p>
          </div>

          <Progress value={score} className="h-4" />

          <div className="pt-4 border-t border-border">
            <Button className="btn-premium" size="lg">
              Get Your Custom Growth Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Card className="glass-card-premium max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-display gradient-text text-center">
          Business Health Diagnostic
        </CardTitle>
        <div className="flex justify-center">
          <Progress value={(currentQuestion / questions.length) * 100} className="w-64 h-2" />
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <h3 className="text-lg font-semibold">{question.question}</h3>
        
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="p-4 h-auto text-left hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              onClick={() => handleAnswer(question.id, index)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}