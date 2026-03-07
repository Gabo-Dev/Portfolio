import { Component, Input } from '@angular/core';

export interface Tech {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Tech[];
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCard {
  @Input() project!: Project;
}
