import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERFIL_SECTIONS } from '@core/constants/about-data';
import { SectionTitleComponent } from '@shared/components/about/section-title/section-title.component';
import { InfoItemComponent } from '@shared/components/about/info-item/info-item.component';

@Component({
  selector: 'app-perfil-panel',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, InfoItemComponent],
  templateUrl: './perfil-panel.component.html',
  styleUrl: './perfil-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPanelComponent {
  readonly sections = PERFIL_SECTIONS;
}
