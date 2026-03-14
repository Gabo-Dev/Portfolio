import { Component, signal, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollService } from '@core/services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.header-hidden]': 'isHeaderHidden()',
  },
})
export class HeaderComponent {
  private readonly scrollService = inject(ScrollService);
  
  public readonly isMenuOpen = signal(false);
  
  public readonly isHeaderHidden = computed(() => {
    return this.scrollService.scrollDirection() === 'down' && !this.isMenuOpen();
  });

  toggleMenu(): void {
    this.isMenuOpen.update(state => !state);
  }
}
