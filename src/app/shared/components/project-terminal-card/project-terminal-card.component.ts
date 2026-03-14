import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '@core/models/project.model';

@Component({
  selector: 'app-project-terminal-card',
  standalone: true,
  imports: [],
  templateUrl: './project-terminal-card.component.html',
  styleUrl: './project-terminal-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTerminalCardComponent {
  project = input.required<Project>();
  executeProject = output<string>();

  onExecute(): void {
    this.executeProject.emit(this.project().id);
  }
}
