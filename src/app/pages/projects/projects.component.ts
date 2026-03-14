import { Component, inject, OnInit, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@core/models/project.model';
import { ProjectService } from '@core/services/project.service';
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
  
  public readonly projects = signal<Project[]>([]);
  public readonly activeProjectId = signal<number | null>(null);
  public readonly isBooting = signal<boolean>(false);
  
  public readonly selectedProject = computed(() => 
    this.projects().find(p => p.id === this.activeProjectId())
  );

  ngOnInit(): void {
    this.projects.set(this.projectService.projects());
  }

  onExecuteProject(id: number): void {
    this.activeProjectId.set(id);
    this.isBooting.set(true);
    
    setTimeout(() => {
      this.isBooting.set(false);
    }, 1500);
  }

  onCloseTerminal(): void {
    this.activeProjectId.set(null);
    this.isBooting.set(false);
  }
}
