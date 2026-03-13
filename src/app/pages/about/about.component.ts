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

  readonly developerName = signal('Gabo');
  readonly experienceYears = signal(3);
  readonly activeTab = signal<'background' | 'experience'>('experience');
  readonly folderTab = signal<'enfoque' | 'historia' | 'valores' | 'hobbies'>('enfoque');
  readonly dynamicTitle = computed(
    () => `Sobre ${this.developerName()} - ${this.experienceYears()} Años de Experiencia`,
  );

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'global-scroll');
    this.renderer.addClass(this.document.documentElement, 'global-scroll');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'global-scroll');
    this.renderer.removeClass(this.document.documentElement, 'global-scroll');
  }
}
