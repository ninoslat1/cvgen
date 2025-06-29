import { Component, Type } from '@angular/core';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [Button, Card],
  templateUrl: 'home.html',
  styleUrl: 'home.css',
})
export class HomeComponent {
  // iconBootstrapMemory = bootstrapMemory;
}
