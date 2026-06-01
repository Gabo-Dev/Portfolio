import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StackPanelComponent } from './stack-panel.component';
import { STACK_CHIP_GROUPS } from '@core/constants/about-data';

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

  it('should render one chip group per stack group', () => {
    const groups = fixture.nativeElement.querySelectorAll('app-chip-group');
    expect(groups.length).toBe(STACK_CHIP_GROUPS.length);
  });

  it('should render all skill chips', () => {
    const chips = fixture.nativeElement.querySelectorAll('app-skill-chip');
    const expectedCount = STACK_CHIP_GROUPS.reduce((sum, g) => sum + g.chips.length, 0);
    expect(chips.length).toBe(expectedCount);
  });
});
