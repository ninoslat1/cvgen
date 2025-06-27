import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from '../components/Button';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterOutlet, Button],
  template: `
    <main class="main">
      <section class="py-3 px-10 bg-back flex justify-between items-center">
        <div>
          <p class="text-dark font-pf text-xl font-extrabold">CVGen</p>
        </div>
        <div>
          <a href="/generate">
            <app-button text="Create" className="bg-card" />
          </a>
        </div>
      </section>
      <router-outlet />
    </main>
  `
})
export class MainLayoutComponent {}
