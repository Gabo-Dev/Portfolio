import { Component, ChangeDetectionStrategy } from '@angular/core';
import { VALORES_INFO } from '@core/constants/about-data';
import { SectionTitleComponent } from '@shared/components/about/section-title/section-title.component';
import { InfoItemComponent } from '@shared/components/about/info-item/info-item.component';

@Component({
  selector: 'app-valores-panel',
  standalone: true,
  imports: [SectionTitleComponent, InfoItemComponent],
  templateUrl: './valores-panel.component.html',
  styleUrl: './valores-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValoresPanelComponent {
  readonly valoresInfo = VALORES_INFO;
}
