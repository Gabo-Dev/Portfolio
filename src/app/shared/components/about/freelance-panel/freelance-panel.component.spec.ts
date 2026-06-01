import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FreelancePanelComponent } from './freelance-panel.component';
import { FREELANCE_PROJECTS, FREELANCE_METADATA } from '@core/constants/about-data';

describe('FreelancePanelComponent', () => {
  let component: FreelancePanelComponent;
  let fixture: ComponentFixture<FreelancePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [FreelancePanelComponent] });
    fixture = TestBed.createComponent(FreelancePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the freelance section title', () => {
    const title = fixture.nativeElement.querySelector('app-section-title');
    expect(title).toBeTruthy();
  });

  it('should render all metadata chips', () => {
    const chips = fixture.nativeElement.querySelectorAll('app-meta-chip');
    expect(chips.length).toBe(FREELANCE_METADATA.length);
  });

  it('should render all project blocks', () => {
    const blocks = fixture.nativeElement.querySelectorAll('app-project-block');
    expect(blocks.length).toBe(FREELANCE_PROJECTS.length);
  });
});
