import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Lazy Loading
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'servers',
    loadComponent: () =>
      import('./servers/servers.component').then((m) => m.ServersComponent),
  },
];
