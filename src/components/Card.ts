import { Component, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, NgIconsModule, provideIcons } from '@ng-icons/core';
import { bootstrapMemory } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgIconsModule, NgIcon],
  template: `
    <div 
      [ngClass]="className" 
      class="font-scp text-sm text-dark shadow-2xl font-semibold rounded-2xl w-64 h-64"
    >
    <div>
    <div class="bg-blue-500">
        <ng-icon *ngIf="icon" [name]="icon" class="text-2xl" />
      </div>
    </div>
    <p>
        {{ text }}
    </p>  
    </div>
  `
})

export class Card {
  @Input() text = 'Card';
  @Input() icon?: string;
  @Input() className = 'bg-card';
}
