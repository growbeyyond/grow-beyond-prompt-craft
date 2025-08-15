import { Helmet } from 'react-helmet-async'

interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'service' | 'faq'
  data: any
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Grow Beyyond Digital Agency",
          "alternateName": "Grow Beyyond",
          "url": "https://growbeyyond.com",
          "logo": "https://growbeyyond.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-88864-35551",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "te"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "sameAs": [
            "https://facebook.com/growbeyyond",
            "https://instagram.com/growbeyyond",
            "https://linkedin.com/company/growbeyyond"
          ]
        }

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Grow Beyyond Digital Marketing Agency",
          "image": "https://growbeyyond.com/hero-image.jpg",
          "telephone": "+91-88864-35551",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.3850,
            "longitude": 78.4867
          },
          "url": "https://growbeyyond.com",
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        }

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
          "description": "Complete digital marketing solutions including website development, SEO, social media marketing, and paid advertising",
          "provider": {
            "@type": "Organization",
            "name": "Grow Beyyond Digital Agency"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Hyderabad, India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website Development"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "SEO Services"
                }
              }
            ]
          }
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs?.map((faq: any) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          })) || []
        }

      default:
        return {}
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  )
}