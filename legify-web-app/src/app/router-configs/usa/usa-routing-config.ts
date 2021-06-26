import { Routes } from '@angular/router';
import { HasSelectedApplicationGuard } from '@legify/web-core';

export const usaRoutingConfig: Routes = [
  {
    path: 'apply',
    loadChildren: () =>
      import('../../modules/apply/apply-usa/apply-usa.module').then(
        (m) => m.ApplyUsaModule
      ),
    canActivate: [HasSelectedApplicationGuard],
    canActivateChild: [HasSelectedApplicationGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth-usa/auth-usa.module').then(
        (m) => m.AuthUsaModule
      )
  }
];
