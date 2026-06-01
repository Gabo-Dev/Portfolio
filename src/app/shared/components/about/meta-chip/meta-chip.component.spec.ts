import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MetaChipComponent } from './meta-chip.component';

describe('MetaChipComponent', () => {
  let component: MetaChipComponent;
  let fixture: ComponentFixture<MetaChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [MetaChipComponent] });
    fixture = TestBed.createComponent(MetaChipComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('label', 'Status');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render label and value', () => {
    fixture.componentRef.setInput('label', 'Role:');
    fixture.componentRef.setInput('value', 'Developer');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.meta-chip__label')?.textContent).toContain('Role:');
    expect(fixture.nativeElement.querySelector('.meta-chip__value')?.textContent).toContain('Developer');
  });

  it('should apply active variant class', () => {
    fixture.componentRef.setInput('label', 'Active');
    fixture.componentRef.setInput('variant', 'active');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.status-active')).toBeTruthy();
  });

  it('should not render value span when value is undefined', () => {
    fixture.componentRef.setInput('label', 'Empty');
    fixture.componentRef.setInput('value', undefined);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.meta-chip__value')).toBeFalsy();
  });
});
