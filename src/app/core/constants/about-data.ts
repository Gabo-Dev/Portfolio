import {
  ProfileData,
  FolderTab,
  TechItem,
  SkillChip,
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

export const STACK_INTRO =
  'Me he centrado en el estudio de tecnologías modernas por cuenta propia, a través de cursos y proyectos reales. Cuento con bases en lenguajes como Java, C, C# y SQL gracias a la formación recibida en la universidad.';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const STACK_TECH: TechItem[] = [
  { name: 'JavaScript', logoUrl: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'TypeScript', logoUrl: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'Angular',    logoUrl: `${DEVICON}/angular/angular-original.svg` },
  { name: 'React',      logoUrl: `${DEVICON}/react/react-original.svg` },
  { name: 'Electron',   logoUrl: `${DEVICON}/electron/electron-original.svg` },
  { name: 'Supabase',   logoUrl: `${DEVICON}/supabase/supabase-original.svg` },
];

export const STACK_SKILLS: SkillChip[] = [
  { name: 'Investigación',    color: '#ffd6e0' },
  { name: 'Integración de IA', color: '#c7f2ff' },
  { name: 'Arquitectura',     color: '#d4f0c8' },
  { name: 'Testing',          color: '#fff0c4' },
  { name: 'Optimización',     color: '#e8d4f0' },
  { name: 'DevOps',           color: '#ffd4c4' },
];

export const PERFIL_SECTIONS = {
  intro: {
    title: 'Quién soy',
    iconName: 'user',
    paragraphs: [
      'Soy desarrollador frontend con formación en Ingeniería del Software.',
      'Soy autodidacta por naturaleza.',
      'Cuando uso IA, no delego a ciegas. Discerno entre qué vale automatizar y qué requiere intervención manual. No practico vibe coding: entiendo lo que escribo, reviso lo que genera la IA y tomo decisiones arquitectónicas informadas.',
    ],
  },
  formacion: {
    title: 'Formación',
    iconName: 'graduation-cap',
    items: [
      { label: 'Ing. del Software (UHU)', value: 'Pendiente 2 exámenes y defensa de TFG.' },
      { label: 'IBM Front End with React', value: 'edX — certificación profesional.' },
      { label: 'AI Fluency Foundations', value: 'Anthropic — fundamentos de IA.' },
    ] as InfoItem[],
  },
  experiencia: {
    title: 'Experiencia',
    iconName: 'briefcase',
    items: [
      {
        label: 'Desarrollador de Software — Freelance',
        value: 'Marzo - Diciembre 2025',
        body: 'Desarrollador de software, web y automatizaciones en asesoría de nutrición y entrenamiento.',
      },
      {
        label: 'Dev Junior — Stack & Flow',
        value: 'Mayo 2026 - Actualidad',
        body: 'Colaborador en proyectos open source.',
      },
      {
        label: 'Hostelería — Grupo Abades',
        value: 'Julio - Septiembre 2022',
        body: 'Camarero en el Grupo Abades. Atención al cliente, manejo de plataforma de cobro y trabajo en equipo.',
      },
    ],
  },
  busqueda: {
    title: 'Qué busco',
    iconName: 'search',
    paragraphs: [
      'Busco un equipo donde pueda crecer como ingeniero, no solo como desarrollador. Quiero trabajar en proyectos con ambición técnica, donde la arquitectura importe tanto como el producto.',
    ],
    items: [
      { label: 'Disponibilidad', value: 'Inmediata. Abierto a reubicación en España o trabajo remoto.' },
      { label: 'Idiomas', value: 'Inglés conversacional y técnico (B2 práctico).' },
    ] as InfoItem[],
  },
};

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
