import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SectionIconComponent } from './section-icon.component';

describe('SectionIconComponent', () => {
  let component: SectionIconComponent;
  let fixture: ComponentFixture<SectionIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SectionIconComponent] });
    fixture = TestBed.createComponent(SectionIconComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('iconName', 'briefcase');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render an SVG for a known icon', () => {
    fixture.componentRef.setInput('iconName', 'briefcase');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeTruthy();
  });

  it('should not render an SVG for an unknown icon', () => {
    fixture.componentRef.setInput('iconName', 'unknown-icon');
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).toBeFalsy();
  });
});
