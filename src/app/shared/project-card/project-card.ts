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
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() project!: Project;
}
