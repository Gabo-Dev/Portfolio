import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-icon.component.html',
  styleUrl: './section-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionIconComponent {
  iconName = input.required<string>();
}
