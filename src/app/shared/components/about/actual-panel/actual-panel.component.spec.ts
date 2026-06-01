import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActualPanelComponent } from './actual-panel.component';
import { ACTUAL_COLLABORATIONS, ACTUAL_METADATA } from '@core/constants/about-data';

describe('ActualPanelComponent', () => {
  let component: ActualPanelComponent;
  let fixture: ComponentFixture<ActualPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ActualPanelComponent] });
    fixture = TestBed.createComponent(ActualPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render a section icon per collaboration', () => {
    const icons = fixture.nativeElement.querySelectorAll('app-section-icon');
    expect(icons.length).toBe(ACTUAL_COLLABORATIONS.length);
  });

  it('should render all metadata chips', () => {
    const chips = fixture.nativeElement.querySelectorAll('app-meta-chip');
    expect(chips.length).toBe(ACTUAL_METADATA.length);
  });
});
