// Centralized contact information and brand constants
export const CONTACT_INFO = {
  phone: '+91 8886435551',
  email: 'directors@growbeyyond.in',
  address: {
    street: 'Film Nagar',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    pincode: '500033'
  },
  hours: 'Mon-Sat: 9 AM - 7 PM IST',
  whatsapp: {
    number: '+91 8886435551',
    welcomeMessage: 'Hi, I want to get started with Grow Beyyond and grow my business online!'
  },
  social: {
    linkedin: 'https://linkedin.com/company/growbeyyond',
    instagram: 'https://instagram.com/growbeyyond',
    youtube: 'https://youtube.com/@growbeyyond'
  }
}

export const BRAND_INFO = {
  name: 'Grow Beyyond',
  tagline: 'Digital Excellence',
  description: 'AI-powered websites and marketing solutions that convert visitors into customers',
  website: 'https://growbeyyond.in',
  founded: '2023',
  location: 'Hyderabad, India'
}

// Helper functions for contact actions
export const getWhatsAppUrl = (customMessage?: string) => {
  const message = customMessage || CONTACT_INFO.whatsapp.welcomeMessage
  return `https://wa.me/${CONTACT_INFO.whatsapp.number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export const getTelUrl = () => `tel:${CONTACT_INFO.phone}`

export const getEmailUrl = (subject?: string) => {
  const emailSubject = subject || 'Business Inquiry - Grow Beyyond'
  return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(emailSubject)}`
}

export const getFullAddress = () => {
  const { street, city, state, country } = CONTACT_INFO.address
  return `${street}, ${city}, ${state}, ${country}`
}