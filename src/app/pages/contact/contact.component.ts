import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MetaService } from '@core/services/meta.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  private readonly metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateMetaTags({
      title: 'Contacto - Jonathan Orna',
      description: 'Ponte en contacto conmigo. Disponible para proyectos freelance, trabajo remoto o reubicación en España.',
    });
  }
}

