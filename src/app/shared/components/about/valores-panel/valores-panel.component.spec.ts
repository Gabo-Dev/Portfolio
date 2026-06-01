import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ValoresPanelComponent } from './valores-panel.component';
import { VALORES_INFO } from '@core/constants/about-data';

describe('ValoresPanelComponent', () => {
  let component: ValoresPanelComponent;
  let fixture: ComponentFixture<ValoresPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ValoresPanelComponent] });
    fixture = TestBed.createComponent(ValoresPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title', () => {
    const title = fixture.nativeElement.querySelector('app-section-title');
    expect(title).toBeTruthy();
  });

  it('should render all valores info items', () => {
    const items = fixture.nativeElement.querySelectorAll('app-info-item');
    expect(items.length).toBe(VALORES_INFO.length);
  });
});
