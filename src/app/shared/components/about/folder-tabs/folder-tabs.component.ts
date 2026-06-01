import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTab, TabType } from '@core/models/about.model';

@Component({
  selector: 'app-folder-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder-tabs.component.html',
  styleUrl: './folder-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FolderTabsComponent {
  tabs = input.required<FolderTab[]>();
  activeTab = model<TabType>('perfil');

  selectTab(tabId: TabType): void {
    this.activeTab.set(tabId);
  }
}
