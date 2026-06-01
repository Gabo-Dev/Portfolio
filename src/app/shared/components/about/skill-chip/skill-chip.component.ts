import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-chip.component.html',
  styleUrl: './skill-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillChipComponent {
  name = input.required<string>();
  variant = input<'default' | 'accent' | 'wood'>('default');
  level = input<number>(0);

  readonly maxLevel = 5;

  get filledDots(): number[] {
    return Array.from({ length: Math.min(this.level(), this.maxLevel) }, (_, i) => i);
  }

  get emptyDots(): number[] {
    return Array.from({ length: this.maxLevel - Math.min(this.level(), this.maxLevel) }, (_, i) => i);
  }
}
