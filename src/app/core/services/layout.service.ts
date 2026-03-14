import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly router = inject(Router);
  private readonly _isFooterVisible = signal(true);
  
  readonly isFooterVisible = this._isFooterVisible.asReadonly();

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showFooter();
    });
  }

  showFooter(): void {
    this._isFooterVisible.set(true);
  }

  hideFooter(): void {
    this._isFooterVisible.set(false);
  }
}
