import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SkillChipComponent } from './skill-chip.component';

describe('SkillChipComponent', () => {
  let component: SkillChipComponent;
  let fixture: ComponentFixture<SkillChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [SkillChipComponent] });
    fixture = TestBed.createComponent(SkillChipComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('name', 'Angular');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display the skill name', () => {
    fixture.componentRef.setInput('name', 'TypeScript');
    fixture.detectChanges();

    const nameEl = fixture.nativeElement.querySelector('.chip-name');
    expect(nameEl.textContent).toContain('TypeScript');
  });

  it('should apply the accent variant class', () => {
    fixture.componentRef.setInput('name', 'React');
    fixture.componentRef.setInput('variant', 'accent');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.chip--accent')).toBeTruthy();
  });

  it('should render correct filled and empty dots for level within max', () => {
    fixture.componentRef.setInput('name', 'Java');
    fixture.componentRef.setInput('level', 3);
    fixture.detectChanges();

    const filled = fixture.nativeElement.querySelectorAll('.dot--filled');
    const empty = fixture.nativeElement.querySelectorAll('.dot--empty');
    expect(filled.length).toBe(3);
    expect(empty.length).toBe(2);
  });

  it('should cap level at maxLevel (5) for dot rendering', () => {
    fixture.componentRef.setInput('name', 'JavaScript');
    fixture.componentRef.setInput('level', 10);
    fixture.detectChanges();

    const filled = fixture.nativeElement.querySelectorAll('.dot--filled');
    const empty = fixture.nativeElement.querySelectorAll('.dot--empty');
    expect(filled.length).toBe(5);
    expect(empty.length).toBe(0);
  });

  it('should not render dots when level is 0', () => {
    fixture.componentRef.setInput('name', 'DevOps');
    fixture.componentRef.setInput('level', 0);
    fixture.detectChanges();

    const dots = fixture.nativeElement.querySelector('.skill-dots');
    expect(dots).toBeFalsy();
  });
});
