import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-block.component.html',
  styleUrl: './project-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectBlockComponent {
  name = input.required<string>();
  description = input.required<string>();
  metric = input<string | undefined>(undefined);
  tag = input<string | undefined>(undefined);
  elevation = input<'base' | 'medium' | 'high'>('base');
}
