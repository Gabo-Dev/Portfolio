import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgStyle } from '@angular/common';
import { STACK_INTRO, STACK_TECH, STACK_SKILLS } from '@core/constants/about-data';

@Component({
  selector: 'app-stack-panel',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './stack-panel.component.html',
  styleUrl: './stack-panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackPanelComponent {
  readonly intro = STACK_INTRO;
  readonly techItems = STACK_TECH;
  readonly skills = STACK_SKILLS;
}
