import { Component, ChangeDetectionStrategy } from '@angular/core';
import { STACK_CHIP_GROUPS } from '@core/constants/about-data';
import { ChipGroupComponent } from '@shared/components/about/chip-group/chip-group.component';
import { SkillChipComponent } from '@shared/components/about/skill-chip/skill-chip.component';

@Component({
  selector: 'app-stack-panel',
  standalone: true,
  imports: [ChipGroupComponent, SkillChipComponent],
  templateUrl: './stack-panel.component.html',
  styleUrl: './stack-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackPanelComponent {
  readonly stackGroups = STACK_CHIP_GROUPS;
}
