import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'service'
}

export const SEOHead = ({ 
  title = "Grow Beyyond - Digital Marketing & Website Development in Hyderabad",
  description = "Transform your business with AI-powered websites, social media marketing, and digital solutions. 300% ROI increase guaranteed. 24-hour website delivery. Trusted by 50+ Hyderabad businesses.",
  keywords = [
    "digital marketing hyderabad",
    "website development hyderabad", 
    "social media marketing",
    "AI-powered websites",
    "business growth",
    "ROI marketing",
    "WhatsApp automation",
    "local SEO hyderabad"
  ],
  image = "https://growbeyyond.in/og-image.jpg",
  url = "https://growbeyyond.in",
  type = "website" 
}: SEOHeadProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Grow Beyyond",
    "description": description,
    "url": url,
    "telephone": "+918886435551",
    "email": "directors@growbeyyond.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Film Nagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500033",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4201",
      "longitude": "78.4482"
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "sameAs": [
      "https://linkedin.com/company/growbeyyond",
      "https://instagram.com/growbeyyond",
      "https://youtube.com/@growbeyyond"
    ],
    "areaServed": [
      "Hyderabad",
      "Telangana",
      "India"
    ],
    "serviceType": "Digital Marketing Agency",
    "priceRange": "₹₹"
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Grow Beyyond" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Grow Beyyond" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@growbeyyond" />
      
      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2D6BFF" />
      <meta name="msapplication-TileColor" content="#2D6BFF" />
      <link rel="canonical" href={url} />
      
      {/* Business/Local SEO */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.4201;78.4482" />
      <meta name="ICBM" content="17.4201, 78.4482" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}