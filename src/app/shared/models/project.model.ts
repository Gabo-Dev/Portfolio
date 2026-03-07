export interface Tech {
  name: string;
  img: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Tech[];
}
