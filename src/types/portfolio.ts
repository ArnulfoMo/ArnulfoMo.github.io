export interface Education {
  degree: string
  institution: string
  period: string
}

export interface ProfessionalLink {
  label: string
  url?: string
  placeholder: string
}

export interface PortfolioProfile {
  name: string
  initials: string
  role: string
  introduction: string
  summary: string
  biography: string
  interests: string
  education: Education[]
  email: string
  cvUrl: string
  links: ProfessionalLink[]
}

export interface Project {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  features: string[]
  featured: boolean
  placeholder?: boolean
  image?: ProjectImage
  repository?: string
  demo?: string
  documentation?: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectLink {
  label: string
  url?: string
}
export interface Experience {
  id: string
  role: string
  organization: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
  placeholder?: boolean
}
export interface Technology {
  name: string
  iconUrl: string
  iconFallback: string
}

export interface TechnologyGroup {
  name: string
  symbol: string
  items: Technology[]
  placeholder?: boolean
}
