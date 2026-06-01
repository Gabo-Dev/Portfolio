import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERFIL_INFO } from '@core/constants/about-data';
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
  readonly perfilInfo = PERFIL_INFO;

  readonly sections = [
    { iconName: 'graduation-cap', text: 'Formación Académica', items: [this.perfilInfo[0]] },
    { iconName: 'award', text: 'Certificaciones', items: [this.perfilInfo[1], this.perfilInfo[2]] },
    { iconName: 'briefcase', text: 'Experiencia', items: [this.perfilInfo[3]] },
    { iconName: 'user', text: 'Datos Clave', items: [this.perfilInfo[4], this.perfilInfo[5]] },
  ] as const;
}
