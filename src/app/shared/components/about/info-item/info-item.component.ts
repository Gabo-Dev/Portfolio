import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info-item',
  standalone: true,
  imports: [],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoItemComponent {
  label = input.required<string>();
  value = input<string | undefined>(undefined);
}
