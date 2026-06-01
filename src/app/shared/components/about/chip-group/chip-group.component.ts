import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chip-group',
  standalone: true,
  imports: [],
  templateUrl: './chip-group.component.html',
  styleUrl: './chip-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipGroupComponent {
  label = input.required<string>();
}
