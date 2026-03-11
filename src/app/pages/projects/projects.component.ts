import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@core/models/project.model';
import { ProjectService } from '@core/services/project.service';
import { TerminalLoaderComponent } from '@shared/components/terminal-loader/terminal-loader.component';
import { ProjectTerminalDisplayComponent } from '@shared/components/project-terminal-display/project-terminal-display.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TerminalLoaderComponent, ProjectTerminalDisplayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  
  public projects: Project[] = [];
  public areCardsVisible = signal<boolean>(true); 
  public isLoading = signal<boolean>(false);
  public isTerminalVisible = signal<boolean>(false);
  public isTerminalTransitioning = signal<boolean>(false);
  public activeProjectId = signal<number | null>(null);
  
  public selectedProject = computed(() => 
    this.projects.find(p => p.id === this.activeProjectId())
  );

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onExecuteProject(id: number): void {
    this.isLoading.set(true);
    this.areCardsVisible.set(false);
    
    setTimeout(() => {
      this.isLoading.set(false);
      this.activeProjectId.set(id);
      this.isTerminalTransitioning.set(true);
      
      setTimeout(() => {
        this.isTerminalVisible.set(true);
        this.isTerminalTransitioning.set(false);
      }, 50);
    }, 800);
  }

  onCloseTerminal(): void {
    this.isTerminalTransitioning.set(true);
    
    setTimeout(() => {
      this.isTerminalVisible.set(false);
      this.activeProjectId.set(null);
      this.isTerminalTransitioning.set(false);
      this.isLoading.set(true);
      
      setTimeout(() => {
        this.isLoading.set(false);
        setTimeout(() => {
          this.areCardsVisible.set(true);
        }, 200);
      }, 800);
    }, 500);
  }
}
