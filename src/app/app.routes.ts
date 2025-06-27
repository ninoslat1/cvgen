import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout';
import { HomeComponent } from '../pages/Home/Home';
import { PlainLayoutComponent } from '../layouts/plain-layout';
import { GenerateComponent } from '../pages/Generate/Generate';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: '',
    component: PlainLayoutComponent,
    children: [
      { path: 'generate', component: GenerateComponent }
    ]
  }
];
