import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'a',
    loadComponent: () => import('./components/page-a/page-a.component').then(c => c.PageAComponent)
  },
  {
    path: 'b',
    loadComponent: () => import('./components/page-b/page-b.component').then(c => c.PageBComponent)
  }
];
