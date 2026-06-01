import {
  ProfileData,
  FolderTab,
  ChipGroup,
  InfoItem,
  ProjectBlock,
  MetaChip,
  SectionTitle,
} from '@core/models/about.model';

export const PROFILE_DATA: ProfileData = {
  photoSrc: 'v1773229104/fotoPerfil_dryi8z.png',
  name: 'Jonathan Orna Ponce',
  role: 'Software Engineer | Frontend Developer',
  description:
    'Mi camino en el desarrollo comenzó por curiosidad y se convirtió en vocación. Cada proyecto me permite crecer como ingeniero y acercarme a mi objetivo profesional: convertirme en arquitecto de software y diseñar sistemas sólidos, escalables y sostenibles.',
  statusActive: true,
};

export const FOLDER_TABS: FolderTab[] = [
  { id: 'perfil', label: 'Perfil', icon: 'user' },
  { id: 'stack', label: 'Stack', icon: 'code' },
  { id: 'valores', label: 'Valores', icon: 'heart' },
  { id: 'freelance', label: 'Freelance', icon: 'briefcase' },
  { id: 'actual', label: 'Colaboraciones', icon: 'rocket' },
];

export const STACK_CHIP_GROUPS: ChipGroup[] = [
  {
    label: 'Stack Tecnológico',
    chips: [
      { name: 'JavaScript', variant: 'accent', level: 5 },
      { name: 'TypeScript', variant: 'accent', level: 5 },
      { name: 'Angular', variant: 'wood', level: 4 },
      { name: 'React', variant: 'wood', level: 4 },
      { name: 'Electron', variant: 'default', level: 3 },
      { name: 'SQL', variant: 'default', level: 3 },
      { name: 'Java', variant: 'default', level: 3 },
      { name: 'Supabase', variant: 'default', level: 3 },
    ],
  },
  {
    label: 'Habilidades Técnicas',
    chips: [
      { name: 'Investigación', variant: 'default', level: 0 },
      { name: 'Integración de IA', variant: 'default', level: 0 },
      { name: 'Arquitectura', variant: 'default', level: 0 },
      { name: 'Testing', variant: 'default', level: 0 },
      { name: 'Optimización', variant: 'default', level: 0 },
      { name: 'DevOps', variant: 'default', level: 0 },
    ],
  },
];

export const PERFIL_INFO: InfoItem[] = [
  { label: 'Ing. del Software (UHU)', value: 'A 2 asignaturas + TFG.' },
  { label: 'IBM Front End with React', value: '(edX).' },
  { label: 'AI Fluency Foundations', value: '(Anthropic).' },
  { label: 'Frontend Freelance', value: '(Marzo - Dic 2025)' },
  {
    label: 'Disponibilidad',
    value: 'Total. Abierto a reubicación en España o trabajo remoto.',
  },
  {
    label: 'Idiomas',
    value: 'Inglés conversacional y técnico (Nivel B2 práctico).',
  },
];

export const VALORES_INFO: InfoItem[] = [
  {
    label: 'Arquitectura primero',
    value: 'El código rápido que no escala no es una solución, es deuda técnica.',
  },
  {
    label: 'Comunicación directa',
    value: 'Prefiero un "no funciona así" a tiempo que un "sí" que bloquea al equipo.',
  },
  {
    label: 'Aprendizaje continuo',
    value: 'Cada tecnología que aprendo la enseño. Enseñar es la mejor forma de consolidar.',
  },
];

export const FREELANCE_PROJECTS: ProjectBlock[] = [
  {
    name: 'Landing Page — Webflow',
    description:
      'Primera toma de contacto. Captábamos clientes desde los CTA y redes sociales, asegurando el embudo de captación.',
    metric: '+20% leads',
  },
  {
    name: 'App escritorio — Electron',
    description:
      'Construí un MVP de escritorio para validar la solución internamente. Al funcionar, los co-founders pidieron llevarlo a web. La migración fue cuestión de días porque el frontend ya estaba desacoplado de la lógica de negocio.',
    tag: 'MVP',
  },
  {
    name: 'Dashboard web — Vercel + React + Supabase',
    description:
      'Cada miembro gestionaba sus clientes, medidas antropométricas e historiales, y también las tareas comunes del sistema: cuentas de empresa, registros diarios y métricas compartidas.',
    metric: '-60% tareas admin',
    elevation: 'high',
  },
];

export const ACTUAL_COLLABORATIONS: { title: SectionTitle; items: InfoItem[] }[] = [
  {
    title: { iconName: 'layers', text: 'Stack & Flow — Design System' },
    items: [
      { label: 'Estado', value: 'En activo' },
      { label: 'Rol', value: 'Colaborador Frontend' },
      {
        label: 'Stack',
        value: 'React · TypeScript · Tailwind · Radix UI · Storybook',
      },
    ],
  },
];

export const FREELANCE_METADATA: MetaChip[] = [
  { label: 'Cliente:', value: 'Asesoría de nutrición y entrenamiento personal' },
  { label: 'Duración:', value: 'Marzo - Diciembre 2025' },
  { label: 'Modalidad:', value: 'Remoto' },
  { label: 'Localidad:', value: 'Totana - Alhama de Murcia' },
];

export const ACTUAL_METADATA: MetaChip[] = [
  { label: 'En activo', variant: 'active' },
  { label: 'Rol:', value: 'Colaborador Frontend' },
  { label: 'Stack:', value: 'React · TypeScript · Tailwind · Radix UI · Storybook' },
];
