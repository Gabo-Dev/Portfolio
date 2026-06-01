import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileCardComponent {
  photoSrc = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
  description = input.required<string>();
  statusActive = input<boolean>(true);
}
