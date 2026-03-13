import { Component, input, output, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { Project } from '@core/models/project.model';
import { ProjectService } from '@core/services/project.service';

@Component({
  selector: 'app-project-terminal-display',
  standalone: true,
  imports: [LowerCasePipe],
  templateUrl: './project-terminal-display.component.html',
  styleUrl: './project-terminal-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTerminalDisplayComponent {
  project = input.required<Project>();
  allProjects = input.required<Project[]>();
  closeTerminal = output<void>();
  navigateProject = output<number>();

  private projectService = inject(ProjectService);

  public currentProjectIndex = computed(() => {
    if (this.allProjects() && this.project()) {
      return this.allProjects().findIndex(p => p.id === this.project().id);
    }
    return -1;
  });

  public totalProjects = computed(() => this.allProjects() ? this.allProjects().length : 0);

  onCloseClick(): void {
    this.closeTerminal.emit();
  }

  onNextProject(): void {
    const currentIndex = this.currentProjectIndex();
    if (currentIndex > -1 && this.allProjects() && this.totalProjects() > 0) {
      const nextIndex = (currentIndex + 1) % this.totalProjects();
      this.navigateProject.emit(this.allProjects()[nextIndex].id);
    }
  }

  onPreviousProject(): void {
    const currentIndex = this.currentProjectIndex();
    if (currentIndex > -1 && this.allProjects() && this.totalProjects() > 0) {
      const prevIndex = (currentIndex - 1 + this.totalProjects()) % this.totalProjects();
      this.navigateProject.emit(this.allProjects()[prevIndex].id);
    }
  }
}

