import { Injectable, signal } from '@angular/core';

export type ScrollDirection = 'up' | 'down';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private lastScrollTop = 0;
  private readonly _scrollDirection = signal<ScrollDirection>('up');
  public readonly scrollDirection = this._scrollDirection.asReadonly();

  constructor() {
    window.addEventListener('scroll', (event) => this.handleScroll(event), true);
  }

  private handleScroll(event: Event): void {
    const target = event.target as HTMLElement;
    
    // Ignorar scroll de elementos con clase 'terminal-content' (scroll interno del terminal)
    if (target?.classList?.contains('terminal-content')) {
      return;
    }
    
    if (!target || target.nodeType === 9) { 
      this.processScroll(window.pageYOffset || document.documentElement.scrollTop);
      return;
    }

    if (target.scrollTop !== undefined) {
      this.processScroll(target.scrollTop);
    }
  }

  private processScroll(currentScroll: number): void {
    if (Math.abs(currentScroll - this.lastScrollTop) < 10) return;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      if (this._scrollDirection() !== 'down') {
        this._scrollDirection.set('down');
      }
    } else {
      if (this._scrollDirection() !== 'up') {
        this._scrollDirection.set('up');
      }
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
