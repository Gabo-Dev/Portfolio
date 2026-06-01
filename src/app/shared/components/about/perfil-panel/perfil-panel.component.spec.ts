import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PerfilPanelComponent } from './perfil-panel.component';
import { PERFIL_SECTIONS } from '@core/constants/about-data';

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

  it('should render intro paragraphs', () => {
    const introSection = fixture.nativeElement.querySelector('.intro-column:first-child .intro-section:first-child');
    const paragraphs = introSection.querySelectorAll('.intro-text p');
    expect(paragraphs.length).toBe(PERFIL_SECTIONS.intro.paragraphs.length);
  });

  it('should render formacion info items', () => {
    const items = fixture.nativeElement.querySelectorAll('.info-list app-info-item');
    expect(items.length).toBe(
      PERFIL_SECTIONS.formacion.items.length +
      PERFIL_SECTIONS.experiencia.items.length +
      PERFIL_SECTIONS.busqueda.items.length
    );
  });
});
