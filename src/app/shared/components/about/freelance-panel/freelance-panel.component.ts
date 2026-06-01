import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FREELANCE_PROJECTS, FREELANCE_METADATA } from '@core/constants/about-data';
import { SectionTitleComponent } from '@shared/components/about/section-title/section-title.component';
import { SectionIconComponent } from '@shared/components/about/section-icon/section-icon.component';
import { MetaChipComponent } from '@shared/components/about/meta-chip/meta-chip.component';
import { ProjectBlockComponent } from '@shared/components/about/project-block/project-block.component';

@Component({
  selector: 'app-freelance-panel',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    SectionIconComponent,
    MetaChipComponent,
    ProjectBlockComponent,
  ],
  templateUrl: './freelance-panel.component.html',
  styleUrl: './freelance-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FreelancePanelComponent {
  readonly projects = FREELANCE_PROJECTS;
  readonly metadata = FREELANCE_METADATA;
}
