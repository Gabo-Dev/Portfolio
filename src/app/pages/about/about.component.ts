import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  model,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MetaService } from '@core/services/meta.service';
import { PROFILE_DATA, FOLDER_TABS } from '@core/constants/about-data';
import { ProfileData, FolderTab, TabType } from '@core/models/about.model';

import { ProfileCardComponent } from '@shared/components/about/profile-card/profile-card.component';
import { FolderTabsComponent } from '@shared/components/about/folder-tabs/folder-tabs.component';
import { PerfilPanelComponent } from '@shared/components/about/perfil-panel/perfil-panel.component';
import { StackPanelComponent } from '@shared/components/about/stack-panel/stack-panel.component';
import { ValoresPanelComponent } from '@shared/components/about/valores-panel/valores-panel.component';
import { FreelancePanelComponent } from '@shared/components/about/freelance-panel/freelance-panel.component';
import { ActualPanelComponent } from '@shared/components/about/actual-panel/actual-panel.component';

@Component({
  selector: 'app-about',
  imports: [
    ProfileCardComponent,
    FolderTabsComponent,
    PerfilPanelComponent,
    StackPanelComponent,
    ValoresPanelComponent,
    FreelancePanelComponent,
    ActualPanelComponent,
  ],
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
  readonly folderTab = model<TabType>('perfil');
  readonly dynamicTitle = computed(
    () => `Sobre ${this.developerName()} - ${this.experienceYears()} Años de Experiencia`,
  );

  readonly profileData = computed<ProfileData>(() => PROFILE_DATA);
  readonly folderTabs = computed<FolderTab[]>(() => FOLDER_TABS);

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
