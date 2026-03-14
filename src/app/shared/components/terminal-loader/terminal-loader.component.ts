import { Component, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-terminal-loader',
  standalone: true,
  imports: [],
  templateUrl: './terminal-loader.component.html',
  styleUrl: './terminal-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalLoaderComponent implements OnInit {
  public lines = signal<string[]>([]);

  public progress = signal<number>(0);

  private bootSequences = [
    '[ OK ] Initialize System Core...',
    '[ OK ] Loading GScribe modules...',
    '[ OK ] Establishing secure connection...',
    '[ OK ] Mounting project assets...',
    '[ OK ] Optimizing terminal interface...',
    '[ OK ] System ready.',
  ];

  ngOnInit(): void {
    this.simulateBoot();
  }

  private simulateBoot(): void {
    let index = 0;

    const interval = setInterval(() => {
      if (index < this.bootSequences.length) {
        this.lines.update((prev) => [...prev, this.bootSequences[index]]);
        this.progress.set(Math.round(((index + 1) / this.bootSequences.length) * 100));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150); 
  }
}
