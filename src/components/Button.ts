import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [ngClass]="className" 
      class="font-scp text-sm text-dark px-4 py-2 font-semibold rounded-2xl"
      (click)="handleClick($event)">
      {{ text }}
    </button>
  `
})
export class Button {
  @Input() text = 'Button';
  @Input() className = 'bg-card';
  @Input() href?: string;

  handleClick(event: MouseEvent) {
    if (this.href) {
      window.location.href = this.href;
    }
  }
}
