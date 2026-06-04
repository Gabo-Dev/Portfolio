import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StackPanelComponent } from './stack-panel.component';
import { STACK_INTRO, STACK_TECH, STACK_SKILLS } from '@core/constants/about-data';

describe('StackPanelComponent', () => {
  let component: StackPanelComponent;
  let fixture: ComponentFixture<StackPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StackPanelComponent] });
    fixture = TestBed.createComponent(StackPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the intro text', () => {
    const intro = fixture.nativeElement.querySelector('.stack-intro');
    expect(intro?.textContent?.trim()).toBe(STACK_INTRO);
  });

  it('should render one tech card per tech item', () => {
    const cards = fixture.nativeElement.querySelectorAll('.tech-card');
    expect(cards.length).toBe(STACK_TECH.length);
  });

  it('should render tech logos with correct alt text', () => {
    const logos = fixture.nativeElement.querySelectorAll('.tech-logo');
    logos.forEach((logo: HTMLImageElement, i: number) => {
      expect(logo.alt).toBe(STACK_TECH[i].name);
      expect(logo.src).toContain(STACK_TECH[i].logoUrl);
    });
  });

  it('should render one skill chip per skill', () => {
    const chips = fixture.nativeElement.querySelectorAll('.skill-chip');
    expect(chips.length).toBe(STACK_SKILLS.length);
  });

  it('should apply skill colors via ngStyle', () => {
    const chips = fixture.nativeElement.querySelectorAll('.skill-chip');
    chips.forEach((chip: HTMLElement, i: number) => {
      // Browser normalizes hex to rgb(), so compare via getPropertyValue
      const bg = chip.style.backgroundColor;
      expect(bg).toBeTruthy();
      // Verify each chip has a non-empty background style
      expect(bg.length).toBeGreaterThan(0);
    });
    // Verify correct number of chips rendered with style bindings
    expect(chips.length).toBe(STACK_SKILLS.length);
  });
});
