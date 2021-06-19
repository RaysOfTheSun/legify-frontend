import { Routes } from '@angular/router';

export const corRouterConfig: Routes = [
  {
    path: 'apply',
    loadChildren: () =>
      import('../../modules/apply/apply-cor/apply-cor.module').then(
        (m) => m.ApplyCorModule
      ),
  },
];
