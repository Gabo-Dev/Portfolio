import { Component, Input } from '@angular/core';
import { Project } from '@core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCard {
  @Input() project!: Project;
}
