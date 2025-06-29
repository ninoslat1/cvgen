import { Component, Input, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="w-72 sm:w-80 md:w-96 bg-back h-60 p-8 rounded-2xl shadow font-scp"
    >
    <div>
      <div class="py-2.5">
        <!-- <ng-icon *ngIf="icon" [name]="icon" class="text-4xl font-bold" /> -->
         <p class="font-sans tracking-wide text-lg font-extrabold">{{header}}</p>
      </div>
    </div>
    <p class="text-gray-600 text-sm">
        {{ text }}
    </p>  
    </div>
  `
})

export class Card {
  @Input() text = '';
  @Input() header = "";
  // @Input() icon?: string;

}
