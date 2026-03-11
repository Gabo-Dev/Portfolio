import { Component, Input, Output, EventEmitter, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@core/models/project.model';
import { ProjectService } from '@core/services/project.service';

@Component({
  selector: 'app-project-terminal-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-terminal-display.component.html',
  styleUrl: './project-terminal-display.component.scss',
})
export class ProjectTerminalDisplayComponent implements OnInit {
  @Input({ required: true }) project!: Project;
  @Input({ required: true }) allProjects!: Project[];
  @Output() closeTerminal = new EventEmitter<void>();
  @Output() navigateProject = new EventEmitter<number>();

  private projectService = inject(ProjectService);

  public currentProjectIndex = signal<number>(-1);
  public totalProjects = computed(() => this.allProjects ? this.allProjects.length : 0);

  ngOnInit(): void {
    this.updateProjectIndex();
  }

  ngOnChanges(): void {
    this.updateProjectIndex();
  }

  private updateProjectIndex(): void {
    if (this.allProjects && this.project) {
      const index = this.allProjects.findIndex(p => p.id === this.project.id);
      this.currentProjectIndex.set(index);
    }
  }

  onCloseClick(): void {
    this.closeTerminal.emit();
  }

  onNextProject(): void {
    const currentIndex = this.currentProjectIndex();
    if (currentIndex > -1 && this.allProjects && this.totalProjects() > 0) {
      const nextIndex = (currentIndex + 1) % this.totalProjects();
      this.navigateProject.emit(this.allProjects[nextIndex].id);
    }
  }

  onPreviousProject(): void {
    const currentIndex = this.currentProjectIndex();
    if (currentIndex > -1 && this.allProjects && this.totalProjects() > 0) {
      const prevIndex = (currentIndex - 1 + this.totalProjects()) % this.totalProjects();
      this.navigateProject.emit(this.allProjects[prevIndex].id);
    }
  }
}

