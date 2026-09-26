export interface ProfessionalLink { label: string; url?: string; placeholder: string }
export interface Project {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  features: string[]
  featured: boolean
  placeholder?: boolean
  image?: { src: string; alt: string }
  repository?: string
  demo?: string
  documentation?: string
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
export interface TechnologyGroup { name: string; symbol: string; items: string[]; placeholder?: boolean }
