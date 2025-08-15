import { Badge } from '@/components/ui/badge'

const clients = [
  { name: "Dr. Sindhu Pericherla", industry: "Healthcare", logo: "🏥" },
  { name: "Dr. Namratha Sai Reddy", industry: "Healthcare", logo: "👩‍⚕️" },
  { name: "Footryx Clinics", industry: "Healthcare", logo: "🦶" },
  { name: "Astro Today", industry: "Spiritual", logo: "⭐" },
  { name: "Hyderabad Realty", industry: "Real Estate", logo: "🏢" },
  { name: "TechFlow Solutions", industry: "Technology", logo: "💻" },
  { name: "Elite Fitness", industry: "Fitness", logo: "💪" },
  { name: "Golden Spoon", industry: "Restaurant", logo: "🍽️" },
  { name: "Sparkle Salon", industry: "Beauty", logo: "✨" },
  { name: "EduMax Academy", industry: "Education", logo: "📚" },
  { name: "AutoCare Pro", industry: "Automotive", logo: "🚗" },
  { name: "Green Valley", industry: "Agriculture", logo: "🌱" }
]

export const ClientLogoWall = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0">
            🤝 Trusted Partners
          </Badge>
          <h2 className="text-3xl font-display font-bold mb-4">
            Brands That <span className="gradient-text">Trust Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From healthcare to hospitality, we've helped businesses across industries achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group cursor-pointer border-0"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <h3 className="font-bold text-sm mb-1 group-hover:gradient-text transition-all duration-300">
                {client.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {client.industry}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>+50 more happy clients growing their business</span>
          </div>
        </div>
      </div>
    </section>
  )
}