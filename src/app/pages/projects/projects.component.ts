import { Component } from '@angular/core';
import { Project, ProjectCard } from '@shared/project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class Projects {
  projects: Project[] = [
    {
      id: 1,
      title: 'GAPI',
      description: 'Sistema de Gestión de Agentes y Prompts Inteligentes.',
      technologies: [{ name: 'Angular' }, { name: 'TypeScript' }, { name: 'Node.js' }],
    },
    {
      id: 2,
      title: 'Portfolio Personal',
      description: 'El proyecto que estás construyendo ahora mismo.',
      technologies: [{ name: 'Angular' }, { name: 'TypeScript' }],
    },
    {
      id: 3,
      title: 'Manager App',
      description: 'Aplicación de gestión de tareas y equipos.',
      technologies: [{ name: 'React' }, { name: 'Firebase' }, { name: 'Vite' }],
    },
  ];
}
