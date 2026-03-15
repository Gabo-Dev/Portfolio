import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;
  let addEventListenerSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    addEventListenerSpy = vi.spyOn(window, 'addEventListener');

    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default scroll direction to up', () => {
    expect(service.scrollDirection()).toBe('up');
  });

  it('should register a scroll listener on window with capture', () => {
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
      true
    );
  });

  it('should set direction to down when scrolling past threshold', () => {
    const scrollEvent = new Event('scroll', { bubbles: true });
    Object.defineProperty(scrollEvent, 'target', {
      value: { nodeType: 9 },
      writable: false,
    });

    Object.defineProperty(document.documentElement, 'scrollTop', {
      value: 100,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(window, 'pageYOffset', {
      value: 100,
      writable: true,
      configurable: true,
    });

    service['handleScroll'](scrollEvent);

    expect(service.scrollDirection()).toBe('down');
  });

  it('should set direction to up when scrolling back', () => {
    service['lastScrollTop'] = 200;

    const scrollEvent = new Event('scroll', { bubbles: true });
    Object.defineProperty(scrollEvent, 'target', {
      value: { nodeType: 9 },
      writable: false,
    });

    Object.defineProperty(window, 'pageYOffset', {
      value: 50,
      writable: true,
      configurable: true,
    });

    service['handleScroll'](scrollEvent);

    expect(service.scrollDirection()).toBe('up');
  });

  it('should ignore scroll events from terminal-content elements', () => {
    service['lastScrollTop'] = 0;

    const terminalEl = document.createElement('div');
    terminalEl.classList.add('terminal-content');
    terminalEl.scrollTop = 200;

    const scrollEvent = new Event('scroll', { bubbles: true });
    Object.defineProperty(scrollEvent, 'target', {
      value: terminalEl,
      writable: false,
    });

    service['handleScroll'](scrollEvent);

    expect(service.scrollDirection()).toBe('up');
  });

  it('should ignore small scroll changes below threshold', () => {
    service['lastScrollTop'] = 100;
    service['_scrollDirection'].set('up');

    const scrollEvent = new Event('scroll', { bubbles: true });
    Object.defineProperty(scrollEvent, 'target', {
      value: { nodeType: 9 },
      writable: false,
    });
    Object.defineProperty(window, 'pageYOffset', {
      value: 105,
      writable: true,
      configurable: true,
    });

    service['handleScroll'](scrollEvent);

    expect(service.scrollDirection()).toBe('up');
  });

  it('should clamp lastScrollTop to 0 when negative', () => {
    service['lastScrollTop'] = 50;

    const scrollEvent = new Event('scroll', { bubbles: true });
    Object.defineProperty(scrollEvent, 'target', {
      value: { nodeType: 9 },
      writable: false,
    });
    Object.defineProperty(window, 'pageYOffset', {
      value: -10,
      writable: true,
      configurable: true,
    });

    service['handleScroll'](scrollEvent);

    expect(service['lastScrollTop']).toBe(0);
  });
});
