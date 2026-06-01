import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { InfoItemComponent } from './info-item.component';

@Component({
  selector: 'app-test-wrapper',
  standalone: true,
  imports: [InfoItemComponent],
  template: `
    <app-info-item [label]="label" [value]="value" [body]="body">Fallback content</app-info-item>
  `,
})
class TestWrapperComponent {
  label = 'Test Label';
  value: string | undefined = 'Test Value';
  body: string | undefined = 'Test body description';
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

  it('should render label, date and body', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.info-label')?.textContent).toContain('Test Label');
    expect(fixture.nativeElement.querySelector('.info-date')?.textContent).toContain('Test Value');
    expect(fixture.nativeElement.querySelector('.info-body')?.textContent).toContain('Test body description');
  });

  it('should render projected content when body is undefined', () => {
    fixture.componentInstance.body = undefined;
    fixture.detectChanges();

    const bodyEl = fixture.nativeElement.querySelector('.info-body');
    expect(bodyEl).toBeNull();
  });
});
