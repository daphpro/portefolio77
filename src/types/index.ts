export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
} 