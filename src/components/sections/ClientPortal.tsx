import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Lock, 
  Calendar, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Upload,
  Download,
  Eye
} from 'lucide-react'

interface ProjectUpdate {
  id: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending'
  date: string
  files?: string[]
}

interface ClientPortalProps {
  clientName?: string
  projectName?: string
}

export const ClientPortal: React.FC<ClientPortalProps> = ({
  clientName = "John Doe",
  projectName = "Healthcare Website Redesign"
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  // Mock project data
  const projectProgress = 75
  const updates: ProjectUpdate[] = [
    {
      id: '1',
      title: 'Website Design Completed',
      description: 'Homepage and key pages designed with modern healthcare aesthetics',
      status: 'completed',
      date: '2024-01-15',
      files: ['homepage-design.pdf', 'style-guide.pdf']
    },
    {
      id: '2',
      title: 'Development Phase Started',
      description: 'Frontend development in progress with responsive design implementation',
      status: 'in-progress',
      date: '2024-01-18'
    },
    {
      id: '3',
      title: 'SEO Optimization',
      description: 'Technical SEO setup and content optimization',
      status: 'pending',
      date: '2024-01-25'
    }
  ]

  const metrics = [
    { label: 'Page Views', value: '12,483', change: '+23%' },
    { label: 'Conversions', value: '89', change: '+156%' },
    { label: 'Bounce Rate', value: '32%', change: '-12%' },
    { label: 'Load Time', value: '1.2s', change: '-0.3s' }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would validate credentials
    if (loginForm.email && loginForm.password) {
      setIsAuthenticated(true)
    }
  }

  const getStatusIcon = (status: ProjectUpdate['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: ProjectUpdate['status']) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/20 text-green-700 border-green-500/30">Completed</Badge>
      case 'in-progress':
        return <Badge className="bg-blue-500/20 text-blue-700 border-blue-500/30">In Progress</Badge>
      case 'pending':
        return <Badge variant="outline">Pending</Badge>
    }
  }

  if (!isAuthenticated) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="glass-card-premium">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-display gradient-text">
                  Client Portal Access
                </CardTitle>
                <p className="text-muted-foreground">
                  Login to view your project progress and updates
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full btn-premium">
                    Access Portal
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have access? <a href="#contact" className="text-primary hover:underline">Contact us</a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold gradient-text mb-2">
              Welcome back, {clientName}!
            </h1>
            <p className="text-muted-foreground">Project: {projectName}</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </Button>
        </div>

        {/* Project Progress */}
        <Card className="glass-card-premium mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Project Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Overall Completion</span>
                <span className="text-2xl font-bold text-primary">{projectProgress}%</span>
              </div>
              <Progress value={projectProgress} className="h-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-3 glass-card rounded-lg">
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-green-500">{metric.change}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="updates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          {/* Project Updates */}
          <TabsContent value="updates">
            <div className="space-y-4">
              {updates.map((update) => (
                <Card key={update.id} className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(update.status)}
                        <h3 className="font-semibold text-foreground">{update.title}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(update.status)}
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{update.description}</p>
                    {update.files && (
                      <div className="flex flex-wrap gap-2">
                        {update.files.map((file, index) => (
                          <Button key={index} variant="outline" size="sm" className="h-8">
                            <FileText className="w-3 h-3 mr-1" />
                            {file}
                            <Download className="w-3 h-3 ml-1" />
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Files */}
          <TabsContent value="files">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Project Files</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Project Proposal.pdf',
                    'Design Mockups.zip',
                    'Brand Guidelines.pdf',
                    'Technical Specifications.docx',
                    'SEO Strategy.pdf',
                    'Analytics Report.xlsx'
                  ].map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{file}</span>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 border-2 border-dashed border-muted-foreground/20 rounded-lg text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground mb-2">Upload additional files</p>
                  <Button variant="outline">Choose Files</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages */}
          <TabsContent value="messages">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Project Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">GB</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm">Hi {clientName}! We've completed the initial design phase. Please review the mockups and let us know your feedback.</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button>
                    <MessageSquare className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule */}
          <TabsContent value="schedule">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { phase: 'Discovery & Planning', date: 'Jan 10-12', status: 'completed' },
                    { phase: 'Design Phase', date: 'Jan 13-17', status: 'completed' },
                    { phase: 'Development', date: 'Jan 18-24', status: 'in-progress' },
                    { phase: 'Testing & Review', date: 'Jan 25-26', status: 'pending' },
                    { phase: 'Launch', date: 'Jan 27', status: 'pending' }
                  ].map((phase, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(phase.status as ProjectUpdate['status'])}
                        <span className="font-medium">{phase.phase}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{phase.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}