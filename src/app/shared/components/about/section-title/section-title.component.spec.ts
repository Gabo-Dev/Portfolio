import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SectionTitleComponent } from './section-title.component';

describe('SectionTitleComponent', () => {
  let component: SectionTitleComponent;
  let fixture: ComponentFixture<SectionTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SectionTitleComponent] });
    fixture = TestBed.createComponent(SectionTitleComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('iconName', 'user');
    fixture.componentRef.setInput('text', 'Title');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render the section icon and text', () => {
    fixture.componentRef.setInput('iconName', 'briefcase');
    fixture.componentRef.setInput('text', 'Experience');
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('app-section-icon');
    const text = fixture.nativeElement.querySelector('.title-text');
    expect(icon).toBeTruthy();
    expect(text?.textContent).toContain('Experience');
  });
});
