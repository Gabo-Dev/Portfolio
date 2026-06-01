import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACTUAL_COLLABORATIONS, ACTUAL_METADATA } from '@core/constants/about-data';
import { SectionIconComponent } from '@shared/components/about/section-icon/section-icon.component';
import { MetaChipComponent } from '@shared/components/about/meta-chip/meta-chip.component';

@Component({
  selector: 'app-actual-panel',
  standalone: true,
  imports: [CommonModule, SectionIconComponent, MetaChipComponent],
  templateUrl: './actual-panel.component.html',
  styleUrl: './actual-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualPanelComponent {
  readonly collaborations = ACTUAL_COLLABORATIONS;
  readonly metadata = ACTUAL_METADATA;
}
