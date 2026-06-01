import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { SectionIconComponent } from '@shared/components/about/section-icon/section-icon.component';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [SectionIconComponent],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {
  iconName = input.required<string>();
  text = input.required<string>();
}
