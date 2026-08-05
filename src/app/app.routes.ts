import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'access-control/users',
  },
  {
    path: 'access-control/users',
    loadComponent: () =>
      import(
        './features/access-control/users/pages/user-list/user-list.component'
      ).then(component => component.UserListComponent),
    title: 'Usuários | Nox Bank',
  },
  {
    path: '**',
    redirectTo: 'access-control/users',
  },
];