import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { InfoItemComponent } from './info-item.component';

@Component({
  selector: 'app-test-wrapper',
  standalone: true,
  imports: [InfoItemComponent],
  template: `
    <app-info-item [label]="label" [value]="value">Fallback content</app-info-item>
  `,
})
class TestWrapperComponent {
  label = 'Test Label';
  value: string | undefined = 'Test Value';
}

describe('InfoItemComponent', () => {
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [TestWrapperComponent] });
    fixture = TestBed.createComponent(TestWrapperComponent);
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render label and value', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.info-label')?.textContent).toContain('Test Label');
    expect(fixture.nativeElement.querySelector('.info-value')?.textContent).toContain('Test Value');
  });

  it('should render projected content when value is undefined', () => {
    fixture.componentInstance.value = undefined;
    fixture.detectChanges();

    const valueEl = fixture.nativeElement.querySelector('.info-value');
    expect(valueEl?.textContent).toContain('Fallback content');
  });
});
