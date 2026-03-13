export const TERMINAL_CARD_TYPE = {
  RETRO: 'retro',
  MODERN: 'modern',
  MINIMAL: 'minimal',
  RETRO_CLASSIC_OS: 'retro-classic-os',
} as const;

export type TerminalCardType = (typeof TERMINAL_CARD_TYPE)[keyof typeof TERMINAL_CARD_TYPE];

export const TERMINAL_CARD_COLOR = {
  GREEN: 'green',
  BLUE: 'blue',
  PURPLE: 'purple',
  ORANGE: 'orange',
} as const;

export type TerminalCardColor = (typeof TERMINAL_CARD_COLOR)[keyof typeof TERMINAL_CARD_COLOR];

export const PROJECT_STATUS = {
  DEPLOYED: 'DEPLOYED',
  IN_PROGRESS: 'IN PROGRESS',
} as const;

export type ProjectStatus = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];

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
  terminalCardType: TerminalCardType;
  terminalCardColor: TerminalCardColor;
  version: string;
  status: ProjectStatus;
  deploymentDate: string;
  githubUrl?: string;
  demoUrl?: string;
}
