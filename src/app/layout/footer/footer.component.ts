import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.display]': "layoutService.isFooterVisible() ? 'block' : 'none'"
  }
})
export class FooterComponent {
  public readonly layoutService = inject(LayoutService);
  public readonly currentYear = new Date().getFullYear();
}
