import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-header-typing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-header-typing.component.html',
  styleUrl: './projects-header-typing.component.scss',
})
export class ProjectsHeaderTypingComponent implements OnInit {
  @Input() text: string = 'Welcome to Gabo\'s Portfolio...';
  @Input() typingSpeed: number = 100;
  @Input() delay: number = 1000;

  public displayedText = signal<string>('');
  public showCursor = signal<boolean>(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.typeWriterEffect();
      setInterval(() => {
        this.showCursor.set(!this.showCursor());
      }, 500);
    }, this.delay);
  }

  private typeWriterEffect(): void {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.text.length) {
        this.displayedText.update(value => value + this.text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, this.typingSpeed);
  }
}
