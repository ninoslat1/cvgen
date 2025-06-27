import { Component, Type } from '@angular/core';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { bootstrapMemory } from "@ng-icons/bootstrap-icons"

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [Button, Card, NgIcon],
  templateUrl: 'home.html',
  styleUrl: 'home.css',
})
export class HomeComponent {
  iconBootstrapMemory = bootstrapMemory;
}
