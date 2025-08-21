import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/employe-dashboard/employe-dashboard.component'),
  },
  {
    path: 'dashboard/new',
    loadComponent: () =>
      import('./components/input-employee/input-employee.component'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
