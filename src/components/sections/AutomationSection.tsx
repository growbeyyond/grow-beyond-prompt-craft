import { SplineEmbed } from '@/components/common/SplineEmbed'

export const AutomationSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Automation DNA</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            No lead left unseen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SplineEmbed
            src="https://draft.spline.design/your-automation-spline-url"
            height={560}
            className="rounded-2xl shadow-2xl"
            title="Automation DNA Workflow"
          />
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-primary-foreground font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lead Capture</h3>
            <p className="text-muted-foreground">
              Forms, calls, and messages automatically collected from all channels
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-accent rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-accent-foreground font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Alerts</h3>
            <p className="text-muted-foreground">
              Telegram notifications and email alerts within seconds
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-secondary rounded-xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-secondary-foreground font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
            <p className="text-muted-foreground">
              All data synced to Google Sheets for easy tracking and follow-up
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}