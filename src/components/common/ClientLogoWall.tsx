import { Badge } from '@/components/ui/badge'
import { getLogoWallClients } from '@/lib/client-data'

export const ClientLogoWall = () => {
  const clients = getLogoWallClients()
  
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
          {clients.map((client) => (
            <div
              key={client.id}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group cursor-pointer border-0"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {client.logo}
              </div>
              <h3 className="font-bold text-sm mb-1 group-hover:gradient-text transition-all duration-300">
                {client.company}
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
              {clients.slice(0, 4).map((client) => (
                <img
                  key={client.id}
                  src={client.avatar}
                  alt={client.name}
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <span>+50 more happy clients growing their business</span>
          </div>
        </div>
      </div>
    </section>
  )
}