// Unified client data for testimonials, portfolio, and logo wall consistency

export interface Client {
  id: string
  name: string
  title: string
  company: string
  location: string
  industry: string
  rating: number
  testimonial: string
  results: string
  avatar: string
  logo?: string
  projectTitle?: string
  projectDescription?: string
  projectMetrics?: {
    leads: string
    growth: string
    time: string
  }
  projectImage?: string
  projectUrl?: string
}

export const CLIENTS: Client[] = [
  {
    id: "dr-sindhu-pericherla",
    name: "Dr. Sindhu Pericherla",
    title: "Oncologist",
    company: "OncoCore Cancer Clinic",
    location: "Hyderabad",
    industry: "Healthcare",
    rating: 5,
    testimonial: "Grow Beyyond transformed my practice completely. Within 2 months, my patient appointments increased by 400%. Their team understood exactly what I needed and delivered beyond expectations.",
    results: "400% increase in appointments",
    avatar: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&crop=face",
    logo: "🏥",
    projectTitle: "Dr. Sindhu Pericherla - OncoCore",
    projectDescription: "Complete digital presence for leading oncologist in Hyderabad. Professional website with appointment booking and patient education resources.",
    projectMetrics: {
      leads: "200+ Patient Inquiries",
      growth: "300% Online Presence",
      time: "2 Weeks Launch"
    },
    projectImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    projectUrl: "https://drsindhupericherlaonco.in/"
  },
  {
    id: "dr-namratha-sai-reddy",
    name: "Dr. Namratha Sai Reddy",
    title: "Gynecologist",
    company: "Women's Health Clinic",
    location: "Secunderabad",
    industry: "Healthcare",
    rating: 5,
    testimonial: "The website and digital marketing campaign they created helped us get 250+ new patients in just 3 months. The appointment booking system is seamless and the ROI is fantastic.",
    results: "250% increase in patient appointments",
    avatar: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=80&h=80&fit=crop&crop=face",
    logo: "👩‍⚕️",
    projectTitle: "Dr. Namratha Sai Reddy - Gynecology",
    projectDescription: "Modern medical website with advanced booking system and patient portal. Enhanced digital credibility for women's healthcare specialist.",
    projectMetrics: {
      leads: "150+ Appointments",
      growth: "250% Digital Reach",
      time: "3 Weeks Live"
    },
    projectImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    projectUrl: "https://drnamrathasaireddy.in/"
  },
  {
    id: "footryx-clinics",
    name: "Dr. Amit Patel",
    title: "Podiatrist",
    company: "Footryx Clinics",
    location: "Gachibowli",
    industry: "Healthcare",
    rating: 5,
    testimonial: "Our multi-location clinic saw 300+ new patients after launching the new website. The automated lead system they built saves us 10+ hours per week and converts much better.",
    results: "300% increase in new patients",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    logo: "🦶",
    projectTitle: "Footryx Clinics - Podiatry Chain",
    projectDescription: "Multi-location podiatry clinic website with service showcase and appointment management. Comprehensive foot care solutions.",
    projectMetrics: {
      leads: "300+ New Patients",
      growth: "400% Website Traffic",
      time: "4 Weeks Complete"
    },
    projectImage: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
    projectUrl: "https://footryxclinics.com/"
  },
  {
    id: "astro-today",
    name: "Sunita Gupta",
    title: "Spiritual Advisor",
    company: "Astro Today",
    location: "Kondapur",
    industry: "Spiritual Services",
    rating: 5,
    testimonial: "The astrology platform they created brought us 500+ consultations in 4 months. Their team understood our traditional services and gave them a modern digital approach.",
    results: "500+ consultation bookings",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    logo: "🔮",
    projectTitle: "Astro Today - Astrology Platform",
    projectDescription: "Complete astrology platform with consultation booking, horoscope services, and content management. Modern approach to traditional services.",
    projectMetrics: {
      leads: "500+ Consultations",
      growth: "350% Online Bookings",
      time: "6 Weeks Platform"
    },
    projectImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
    projectUrl: "https://astrotoday.net/"
  },
  {
    id: "elite-coaching",
    name: "Priya Mehta",
    title: "Education Director",
    company: "Elite Coaching Institute",
    location: "Jubilee Hills",
    industry: "Education",
    rating: 5,
    testimonial: "The website and Google Ads campaign they created helped us enroll 300+ new students in just 4 months. The lead quality is excellent and the ROI is fantastic.",
    results: "300+ new student enrollments",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1d4?w=80&h=80&fit=crop&crop=face",
    logo: "📚",
  },
  {
    id: "ca-firm",
    name: "Vikram Singh",
    title: "CA Firm Partner",
    company: "Singh & Associates",
    location: "Banjara Hills",
    industry: "Financial Services",
    rating: 5,
    testimonial: "Their B2B lead generation system is incredible. We now get 50+ qualified business inquiries every month. The quality of leads has improved dramatically.",
    results: "50+ qualified B2B leads monthly",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    logo: "💼",
  }
]

// Helper functions to get client data for different components
export const getTestimonialClients = () => CLIENTS.slice(0, 6)
export const getPortfolioClients = () => CLIENTS.filter(client => client.projectUrl)
export const getLogoWallClients = () => CLIENTS