export type TabType = 'perfil' | 'stack' | 'valores' | 'freelance' | 'actual';

export interface ProfileData {
  photoSrc: string;
  name: string;
  role: string;
  description: string;
  statusActive: boolean;
}

export interface FolderTab {
  id: TabType;
  label: string;
  icon: string;
}

export interface SkillChip {
  name: string;
  variant?: 'default' | 'accent' | 'wood';
  level?: number;
  color?: string;
}

export interface TechItem {
  name: string;
  logoUrl: string;
}

export interface InfoItem {
  label: string;
  value?: string;
  body?: string;
}

export interface ProjectBlock {
  name: string;
  description: string;
  metric?: string;
  tag?: string;
  elevation?: 'base' | 'medium' | 'high';
}

export interface MetaChip {
  label: string;
  value?: string;
  variant?: 'default' | 'active';
}

export interface SectionTitle {
  iconName: string;
  text: string;
}
