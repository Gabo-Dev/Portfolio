import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FolderTabsComponent } from './folder-tabs.component';
import type { FolderTab } from '@core/models/about.model';

const mockTabs: FolderTab[] = [
  { id: 'perfil', label: 'Perfil', icon: 'user' },
  { id: 'stack', label: 'Stack', icon: 'code' },
  { id: 'valores', label: 'Valores', icon: 'heart' },
];

describe('FolderTabsComponent', () => {
  let component: FolderTabsComponent;
  let fixture: ComponentFixture<FolderTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [FolderTabsComponent] });
    fixture = TestBed.createComponent(FolderTabsComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render all tabs', () => {
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button.folder-tab');
    expect(buttons.length).toBe(3);
    expect(buttons[0]?.textContent?.trim()).toBe('Perfil');
    expect(buttons[1]?.textContent?.trim()).toBe('Stack');
  });

  it('should mark the first tab as active by default', () => {
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.componentRef.setInput('activeTab', 'perfil');
    fixture.detectChanges();

    const activeButton = fixture.nativeElement.querySelector('button.folder-tab.active');
    expect(activeButton?.textContent?.trim()).toBe('Perfil');
    expect(activeButton?.getAttribute('aria-selected')).toBe('true');
  });

  it('should update active tab on click', () => {
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.componentRef.setInput('activeTab', 'perfil');
    fixture.detectChanges();

    const secondButton = fixture.nativeElement.querySelectorAll('button.folder-tab')[1] as HTMLButtonElement;
    secondButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('button.folder-tab.active')?.textContent?.trim()).toBe('Stack');
  });
});
