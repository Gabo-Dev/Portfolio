import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '@core/models/project.model';

@Component({
  selector: 'app-project-terminal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-terminal-card.component.html',
  styleUrl: './project-terminal-card.component.scss',
})
export class ProjectTerminalCardComponent {
  @Input({ required: true }) project!: Project;
  @Input() terminalCardType: 'retro' | 'modern' | 'minimal' | 'retro-classic-os' = 'retro';
  @Input() terminalCardColor: 'green' | 'blue' | 'purple' | 'orange' = 'green';
  @Output() executeProject = new EventEmitter<number>();

  onExecute(): void {
    this.executeProject.emit(this.project.id);
  }
}
