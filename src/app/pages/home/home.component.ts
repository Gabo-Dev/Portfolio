import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '@core/constants/portfolio-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public readonly headline = signal(PORTFOLIO_DATA.home.headline);
  public readonly subheadline = signal(PORTFOLIO_DATA.home.subheadline);
  public readonly ctaPrimary = signal(PORTFOLIO_DATA.home.ctaPrimary);
  public readonly ctaSecondary = signal(PORTFOLIO_DATA.home.ctaSecondary);
}
