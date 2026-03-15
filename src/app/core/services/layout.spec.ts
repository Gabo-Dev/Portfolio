import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
    });
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have footer visible by default', () => {
    expect(service.isFooterVisible()).toBe(true);
  });

  it('should hide footer when hideFooter is called', () => {
    service.hideFooter();
    expect(service.isFooterVisible()).toBe(false);
  });

  it('should show footer when showFooter is called after hiding', () => {
    service.hideFooter();
    expect(service.isFooterVisible()).toBe(false);

    service.showFooter();
    expect(service.isFooterVisible()).toBe(true);
  });

  it('should reset footer visibility on navigation', async () => {
    const router = TestBed.inject(Router);

    service.hideFooter();
    expect(service.isFooterVisible()).toBe(false);

    await router.navigateByUrl('/');

    expect(service.isFooterVisible()).toBe(true);
  });
});
