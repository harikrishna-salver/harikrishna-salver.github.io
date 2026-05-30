/**
 * Types for Hari Krishna Salver's Resume & Portfolio Website
 */

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  tag: string;
  description: string;
  impact: string;
  technologies: string[];
  url?: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: {
    title: string;
    text: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skillCategories: SkillCategory[];
  experience: WorkExperience[];
  education: Education[];
  projects: ProjectShowcase[];
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
}
