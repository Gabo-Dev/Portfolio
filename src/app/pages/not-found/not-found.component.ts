import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '@core/services/meta.service';
import { LayoutService } from '@core/services/layout.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  private readonly metaService = inject(MetaService);
  private readonly layoutService = inject(LayoutService);

  ngOnInit(): void {
    this.layoutService.showFooter();
    this.metaService.updateMetaTags({
      title: '404 - Página no encontrada | Jonathan Orna',
      description:
        'La página que intentaste abrir no existe o fue movida. Volvé al portfolio de Jonathan Orna para seguir explorando.',
    });
  }
}
