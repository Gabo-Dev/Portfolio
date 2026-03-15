import { Component, signal, computed, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '@core/constants/portfolio-data';
import { MetaService } from '@core/services/meta.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly metaService = inject(MetaService);

  public readonly headline = signal(PORTFOLIO_DATA.home.headline);
  public readonly subheadline = signal(PORTFOLIO_DATA.home.subheadline);
  public readonly subheadlineParts = computed(() => this.subheadline().split('\n'));
  public readonly ctaPrimary = signal(PORTFOLIO_DATA.home.ctaPrimary);
  public readonly ctaSecondary = signal(PORTFOLIO_DATA.home.ctaSecondary);

  ngOnInit(): void {
    this.metaService.updateMetaTags({
      title: 'Jonathan Orna - Frontend Developer Portfolio',
      description: 'Desarrollador Frontend especializado en Angular 21, React y TypeScript. Arquitecturas limpias, UX profesional y código mantenible.',
    });
  }
}

