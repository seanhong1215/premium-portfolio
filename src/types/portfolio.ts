export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface Profile {
  name: string
  role: string
  headline: string
  summary: string
  availability: string
  location: string
  email: string
  resumeUrl: string
  heroImage: string
  formalImage: string
  socials: SocialLink[]
}

export interface Stat {
  label: string
  value: string
  detail: string
}

export interface SkillGroup {
  name: string
  description: string
  tools: string[]
}

export interface ProjectImage {
  src: string
  alt: string
  label: string
}

export interface Project {
  title: string
  category: string
  summary: string
  coverImage: string
  coverAlt: string
  detailImages?: ProjectImage[]
  problem: string
  solution: string
  architecture: string
  challenge: string
  techStack: string[]
  githubUrl: string
  demoUrl: string
}

export interface WorkExperience {
  company: string
  role: string
  period: string
  summary: string
  highlights: string[]
}


export interface TimelineItem {
  period: string
  title: string
  description: string
}
