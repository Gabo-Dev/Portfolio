import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ChipGroupComponent } from './chip-group.component';

@Component({
  selector: 'app-test-wrapper',
  standalone: true,
  imports: [ChipGroupComponent],
  template: `
    <app-chip-group [label]="label">
      <li class="test-chip">Chip 1</li>
      <li class="test-chip">Chip 2</li>
    </app-chip-group>
  `,
})
class TestWrapperComponent {
  label = 'Group';
}

describe('ChipGroupComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestWrapperComponent] });
    fixture = TestBed.createComponent(TestWrapperComponent);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the label', () => {
    expect(fixture.nativeElement.querySelector('.chip-group__label')?.textContent).toContain('Group');
  });

  it('should project child chips into the list', () => {
    const chips = fixture.nativeElement.querySelectorAll('.test-chip');
    expect(chips.length).toBe(2);
  });
});
