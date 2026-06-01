import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PerfilPanelComponent } from './perfil-panel.component';
import { PERFIL_INFO } from '@core/constants/about-data';

describe('PerfilPanelComponent', () => {
  let component: PerfilPanelComponent;
  let fixture: ComponentFixture<PerfilPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [PerfilPanelComponent] });
    fixture = TestBed.createComponent(PerfilPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render four section titles', () => {
    const titles = fixture.nativeElement.querySelectorAll('app-section-title');
    expect(titles.length).toBe(4);
  });

  it('should render all info items from PERFIL_INFO', () => {
    const items = fixture.nativeElement.querySelectorAll('app-info-item');
    expect(items.length).toBe(PERFIL_INFO.length);
  });
});
