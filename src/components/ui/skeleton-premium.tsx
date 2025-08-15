import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'card' | 'avatar' | 'text' | 'button' | 'image'
}

function Skeleton({
  className,
  variant = 'default',
  ...props
}: SkeletonProps) {
  const variants = {
    default: "animate-pulse rounded-md bg-muted",
    card: "animate-pulse rounded-xl bg-gradient-to-r from-muted via-muted-light to-muted p-6",
    avatar: "animate-pulse rounded-full bg-muted",
    text: "animate-pulse rounded bg-muted h-4",
    button: "animate-pulse rounded-lg bg-muted h-10",
    image: "animate-pulse rounded-lg bg-gradient-to-br from-muted to-muted-light"
  }
  
  return (
    <div
      className={cn(variants[variant], className)}
      {...props}
    />
  )
}

// Specialized Skeleton Components
function SkeletonCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("glass-card p-6 space-y-3", className)} {...props}>
      <Skeleton variant="text" className="h-6 w-3/4" />
      <Skeleton variant="text" className="h-4 w-full" />
      <Skeleton variant="text" className="h-4 w-2/3" />
      <div className="flex space-x-2 pt-4">
        <Skeleton variant="button" className="w-24" />
        <Skeleton variant="button" className="w-20" />
      </div>
    </div>
  )
}

function SkeletonProfile({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center space-x-4", className)} {...props}>
      <Skeleton variant="avatar" className="h-12 w-12" />
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-32" />
        <Skeleton variant="text" className="h-3 w-24" />
      </div>
    </div>
  )
}

function SkeletonTestimonial({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("glass-card p-6 max-w-md", className)} {...props}>
      <div className="flex items-center space-x-3 mb-4">
        <Skeleton variant="avatar" className="h-10 w-10" />
        <div>
          <Skeleton variant="text" className="h-4 w-24 mb-1" />
          <Skeleton variant="text" className="h-3 w-20" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-5/6" />
        <Skeleton variant="text" className="h-4 w-4/5" />
      </div>
      <div className="flex items-center space-x-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-4 rounded-sm" />
        ))}
      </div>
    </div>
  )
}

function SkeletonStats({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-6", className)} {...props}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="text-center space-y-2">
          <Skeleton variant="text" className="h-8 w-16 mx-auto" />
          <Skeleton variant="text" className="h-4 w-20 mx-auto" />
        </div>
      ))}
    </div>
  )
}

function SkeletonPricing({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("glass-card p-8 max-w-sm", className)} {...props}>
      <div className="text-center mb-6">
        <Skeleton variant="text" className="h-6 w-24 mx-auto mb-2" />
        <Skeleton variant="text" className="h-8 w-20 mx-auto" />
      </div>
      <div className="space-y-3 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded-sm" />
            <Skeleton variant="text" className="h-4 flex-1" />
          </div>
        ))}
      </div>
      <Skeleton variant="button" className="w-full h-12" />
    </div>
  )
}

export { 
  Skeleton, 
  SkeletonCard, 
  SkeletonProfile, 
  SkeletonTestimonial,
  SkeletonStats,
  SkeletonPricing
}