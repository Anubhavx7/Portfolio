export interface Project {
  title: string;
  description: string[];
  tech: string[];
  github?: string;
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface PositionOfResponsibility {
  role: string;
  organization: string;
}

export interface ExtraCurricular {
  activity: string;
  role: string;
}
