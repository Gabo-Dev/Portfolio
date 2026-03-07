import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCard } from '@shared/project-card/project-card.component';
import { Project } from '@shared/models/project.model';
import { ProjectService } from '@shared/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);

  public projects: Project[] = [];

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
