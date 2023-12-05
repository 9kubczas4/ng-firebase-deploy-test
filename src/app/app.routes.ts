import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
		redirectTo: "route-a",
		pathMatch: "full",
  },
  {
    path: 'route-a',
    loadComponent: () => import('./components/page-a/page-a.component').then(c => c.PageAComponent)
  },
  {
    path: 'route-b',
    loadComponent: () => import('./components/page-b/page-b.component').then(c => c.PageBComponent)
  }
];
