import { Routes } from '@angular/router';

export const usaRoutingConfig: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth-usa/auth-usa.module').then(
        (m) => m.AuthUsaModule
      )
  }
];
