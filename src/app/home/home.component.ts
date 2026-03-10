import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class Home {
  readonly headline = signal('Software Engineer');
  readonly subheadline = signal(
    'Frontend con fundamentos.\nMe adapto sin perder principios.\nArquitectura limpia por convicción.',
  );
  readonly ctaPrimary = signal('Ver Proyectos');
  readonly ctaSecondary = signal('Mi  enfoque');
}
