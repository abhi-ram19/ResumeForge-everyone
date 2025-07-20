export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string;
  link?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  objective: string;
  education: Education[];
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  achievements: Achievement[];
  activities: string[];
}

export type TemplateType = 'modern' | 'classic' | 'minimal';