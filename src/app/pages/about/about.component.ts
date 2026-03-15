import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { MetaService } from '@core/services/meta.service';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'about-page-host',
  },
})
export class AboutComponent implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly metaService = inject(MetaService);

  readonly developerName = signal('Gabo');
  readonly experienceYears = signal(3);
  readonly activeTab = signal<'background' | 'experience'>('experience');
  readonly folderTab = signal<'enfoque' | 'historia' | 'valores'>('enfoque');
  readonly dynamicTitle = computed(
    () => `Sobre ${this.developerName()} - ${this.experienceYears()} Años de Experiencia`,
  );

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'global-scroll');
    this.renderer.addClass(this.document.documentElement, 'global-scroll');

    this.metaService.updateMetaTags({
      title: 'Sobre mí - Jonathan Orna',
      description: 'Frontend Developer con experiencia en Angular, React y TypeScript. Arquitectura limpia, comunicación directa y aprendizaje continuo.',
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'global-scroll');
    this.renderer.removeClass(this.document.documentElement, 'global-scroll');
  }
}
