import { Routes } from '@angular/router';

export const corRouterConfig: Routes = [
  {
    path: 'apply',
    loadChildren: () =>
      import('../../modules/apply/apply-cor/apply-cor.module').then(
        (m) => m.ApplyCorModule
      )
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth-cor/auth-cor.module').then(
        (m) => m.AuthCorModule
      )
  }
];
