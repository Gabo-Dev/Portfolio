export interface Tech {
  name: string;
  img: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Tech[];
  terminalDescription: string;
  terminalGifUrl: string;
  techStackEmojis: string[];
  terminalCardType: 'retro' | 'modern' | 'minimal' | 'retro-classic-os';
  terminalCardColor: 'green' | 'blue' | 'purple' | 'orange';
  version: string;
  status: 'DEPLOYED' | 'IN PROGRESS';
  deploymentDate: string;
  githubUrl?: string;
  demoUrl?: string;
}
