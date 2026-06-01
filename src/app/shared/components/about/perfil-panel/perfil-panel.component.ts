import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERFIL_SECTIONS } from '@core/constants/about-data';
import { SectionTitleComponent } from '@shared/components/about/section-title/section-title.component';
import { InfoItemComponent } from '@shared/components/about/info-item/info-item.component';
import { MetaChipComponent } from '@shared/components/about/meta-chip/meta-chip.component';

@Component({
  selector: 'app-perfil-panel',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, InfoItemComponent, MetaChipComponent],
  templateUrl: './perfil-panel.component.html',
  styleUrl: './perfil-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPanelComponent {
  readonly sections = PERFIL_SECTIONS;
}
