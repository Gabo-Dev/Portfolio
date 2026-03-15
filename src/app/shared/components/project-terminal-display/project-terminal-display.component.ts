import { Component, input, output, computed, signal, ChangeDetectionStrategy, effect, HostListener } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { Project } from '@core/models/project.model';

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
  navigateProject = output<string>();

  isModalOpen = signal(false);

  public currentProjectIndex = computed(() => {
    if (this.allProjects() && this.project()) {
      return this.allProjects().findIndex(p => p.id === this.project().id);
    }
    return -1;
  });

  public totalProjects = computed(() => this.allProjects() ? this.allProjects().length : 0);

  constructor() {
    effect(() => {
      if (this.isModalOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isModalOpen()) {
      this.closeVideoModal();
    }
  }

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

  openVideoModal(): void {
    this.isModalOpen.set(true);
  }

  closeVideoModal(): void {
    this.isModalOpen.set(false);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeVideoModal();
    }
  }
}

