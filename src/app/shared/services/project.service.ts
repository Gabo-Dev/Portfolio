import { Injectable } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'GScribe',
      description: 'Espacio de trabajo seguro implementado con Arquitectura Hexagonal.',
      technologies: [
        { name: 'React', img: '/assets/icons/react.svg' },
        { name: 'Supabase', img: '/assets/icons/supabase.svg' },
        { name: 'TypeScript', img: '/assets/icons/typescript.svg' },
        { name: 'Vitest', img: '/assets/icons/vitest.svg' },
      ],
      terminalDescription: 'GScribe es un sistema de notas centrado en la privacidad que sirve como referencia práctica de Arquitectura Hexagonal (Ports & Adapters). Aísla la lógica de negocio mediante Inyección de Dependencias y garantiza una defensa en profundidad utilizando Row Level Security (RLS) en Supabase y validación server-side. Incluye UI optimista, flujos de seguridad avanzados y cobertura total de tests (Vitest/Cypress).',
      terminalGifUrl: '/assets/gifs/gscribe-placeholder.gif',
      techStackEmojis: ['🛡️', '⬡', '🧪', '☁️'],
      terminalCardType: 'retro',
      terminalCardColor: 'green',
      version: '1.2.0',
      status: 'DEPLOYED',
      deploymentDate: '2024-11-15',
      githubUrl: 'https://github.com/Gabo-Dev/GScribe',
    },
    {
      id: 2,
      title: 'GAPI',
      description: 'Dashboard cripto resiliente diseñado con Clean Architecture.',
      technologies: [
        { name: 'React', img: '/assets/icons/react.svg' },
        { name: 'Tailwind', img: '/assets/icons/tailwind.svg' },
        { name: 'TypeScript', img: '/assets/icons/typescript.svg' },
        { name: 'Recharts', img: '/assets/icons/recharts.svg' },
      ],
      terminalDescription: 'GAPI es un explorador de datos cripto enfocado en la resiliencia bajo restricciones del mundo real (rate-limiting). Implementa Clean Architecture y una Estrategia de Adquisición de Datos de 3 Capas (User Cache -> API Sync -> Fallback Local) garantizando tiempos de entrega sub-10ms. Destaca por su sistema de caché dinámico y formateo de precios inteligente.',
      terminalGifUrl: '/assets/gifs/gapi-placeholder.gif',
      techStackEmojis: ['📊', '🧹', '⚡', '💾'],
      terminalCardType: 'modern',
      terminalCardColor: 'blue',
      version: '2.0.5',
      status: 'DEPLOYED',
      deploymentDate: '2025-01-20',
      githubUrl: 'https://github.com/Gabo-Dev/GAPI',
    },
    {
      id: 3,
      title: 'ManagerApp',
      description: 'Herramienta de escritorio Local-First para gestión de clientes.',
      technologies: [
        { name: 'Electron', img: '/assets/icons/electron.svg' },
        { name: 'React', img: '/assets/icons/react.svg' },
        { name: 'SQLite', img: '/assets/icons/sqlite.svg' },
        { name: 'Drizzle', img: '/assets/icons/drizzle.svg' },
        { name: 'Zod', img: '/assets/icons/zod.svg' },
        { name: 'Zustand', img: '/assets/icons/zustand.svg' },
      ],
      terminalDescription: 'ManagerApp es una aplicación de escritorio centrada en la privacidad, diseñada para la gestión longitudinal de métricas corporales. Construida bajo el paradigma "Local-First" como alternativa a dashboards en la nube. Utiliza comunicación IPC segura, persistencia robusta con SQLite y Drizzle ORM (Patrón Repository), y garantiza Type-Safety end-to-end desde el main process de Electron hasta la UI reactiva.',
      terminalGifUrl: '/assets/gifs/managerapp-placeholder.gif',
      techStackEmojis: ['💻', '🔒', '🗄️', '⚙️'],
      terminalCardType: 'retro-classic-os',
      terminalCardColor: 'green',
      version: '0.8.0',
      status: 'IN PROGRESS',
      deploymentDate: '2025-03-01',
      githubUrl: 'https://github.com/Gabo-Dev/ManagerApp',
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
