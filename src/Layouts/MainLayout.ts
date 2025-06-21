import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="main">
      <section class="p-2 bg-back flex justify-between items-center">
        <div>
          <p class="text-dark font-pf text-xl font-extrabold">CVGen Home</p>
        </div>
        <div>
          <a href="/generate">
              <button class="bg-card font-scp text-sm text-dark px-4 py-2 rounded font-semibold">Generate Now!</button>
          </a>
        </div>
      </section>
      <router-outlet />
    </main>
  `
})
export class MainLayoutComponent {}
