import { Component, inject, signal, computed, ChangeDetectionStrategy, input, effect, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '@core/models/project.model';
import { ProjectService } from '@core/services/project.service';
import { LayoutService } from '@core/services/layout.service';
import { MetaService } from '@core/services/meta.service';
import { TerminalLoaderComponent } from '@shared/components/terminal-loader/terminal-loader.component';
import { ProjectTerminalDisplayComponent } from '@shared/components/project-terminal-display/project-terminal-display.component';
import { ProjectTerminalCardComponent } from '@shared/components/project-terminal-card/project-terminal-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TerminalLoaderComponent, ProjectTerminalDisplayComponent, ProjectTerminalCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  private readonly projectService = inject(ProjectService);
  private readonly layoutService = inject(LayoutService);
  private readonly metaService = inject(MetaService);
  private readonly router = inject(Router);
  
  public readonly projects = this.projectService.projects;
  public readonly id = input<string>();
  public readonly isBooting = signal<boolean>(false);
  
  public readonly selectedProject = computed(() => {
    const projectId = this.id();
    return projectId ? this.projects().find(p => p.id === projectId) : null;
  });

  constructor() {
    effect(() => {
      const currentId = this.id();
      const project = this.selectedProject();

      if (project) {
        this.metaService.updateMetaTags({
          title: `${project.title} - Proyecto | Jonathan Orna`,
          description: project.description,
          ogImage: project.terminalGifUrl,
        });
      } else {
        this.metaService.updateMetaTags({
          title: 'Proyectos - Jonathan Orna',
          description: 'Explora mis proyectos frontend: GScribe, GAPI, ManagerApp y más. Aplicaciones reales con Angular, React, Electron y arquitecturas modernas.',
        });
      }

      if (currentId) {
        this.isBooting.set(true);
        this.layoutService.hideFooter();
        
        setTimeout(() => {
          this.isBooting.set(false);
          this.layoutService.showFooter();
        }, 1500);
      } else {
        this.isBooting.set(false);
        this.layoutService.showFooter();
      }
    });
  }

  ngOnInit(): void {
    if (!this.id()) {
      this.metaService.updateMetaTags({
        title: 'Proyectos - Jonathan Orna',
        description: 'Explora mis proyectos frontend: GScribe, GAPI, ManagerApp y más. Aplicaciones reales con Angular, React, Electron y arquitecturas modernas.',
      });
    }
  }

  onExecuteProject(id: string): void {
    this.router.navigate(['/projects', id]);
  }

  onCloseTerminal(): void {
    this.router.navigate(['/projects']);
  }
}
