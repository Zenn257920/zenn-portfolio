export type Profile = {
  id: number;
  name: string;
  title: string;
  location: string | null;
  email: string | null;
  phone: string | null;
  bio: string | null;
  availability: string | null;
  created_at?: string | null;
};

export type Skill = {
  id: number;
  category: string;
  name: string;
  sort_order: number;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  period: string | null;
  duration: string | null;
  description: string | null;
  highlight: string | null;
  tech: string | null;
  sort_order: number;
};

export type Project = {
  id: number;
  title: string;
  role: string | null;
  period: string | null;
  description: string | null;
  highlight: string | null;
  tech: string | null;
  demo_url: string | null;
  source_url: string | null;
  sort_order: number;
};

export type Service = {
  id: number;
  title: string;
  description: string | null;
  sort_order: number;
};

export type Education = {
  id: number;
  school: string;
  degree: string | null;
  period: string | null;
  sort_order: number;
};

export type Social = {
  id: number;
  platform: string;
  url: string;
  sort_order: number;
};

export type PortfolioData = {
  profile: Profile[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
  education: Education[];
  socials: Social[];
};
