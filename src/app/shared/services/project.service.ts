import { Injectable } from '@angular/core';
import { Project } from '@shared/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Digital',
      description: 'Mi portfolio personal de proyectos, donde muestro mis habilidades y trabajos anteriores.',
      technologies: [
        { name: 'Angular', img: 'assets/icons/angular.svg' },
        { name: 'TypeScript', img: 'assets/icons/typescript.svg' },
        { name: 'SCSS', img: 'assets/icons/scss.svg' }
      ]
    },
    {
      id: 2,
      title: 'App de Gestión de Tareas',
      description: 'Una aplicación para gestionar tareas diarias, con funcionalidades de drag and drop y notificaciones.',
      technologies: [
        { name: 'Angular', img: 'assets/icons/angular.svg' },
        { name: 'NgRx', img: 'assets/icons/ngrx.svg' },
        { name: 'Firebase', img: 'assets/icons/firebase.svg' }
      ]
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
