import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meta-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meta-chip.component.html',
  styleUrl: './meta-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetaChipComponent {
  label = input.required<string>();
  value = input<string | undefined>(undefined);
  variant = input<'default' | 'active'>('default');
}
