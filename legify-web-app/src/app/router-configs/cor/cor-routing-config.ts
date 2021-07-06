import { Routes } from '@angular/router';
import { HasSelectedApplicationGuard } from '@legify/web-core';
import {
  LegifyTranslationLoaderGuard,
  makeTranslationLoaderData
} from '@legify/web-i18n';

export const corRouterConfig: Routes = [
  {
    path: 'apply',
    loadChildren: () =>
      import('../../modules/apply/apply-cor/apply-cor.module').then(
        (m) => m.ApplyCorModule
      ),
    canActivate: [HasSelectedApplicationGuard, LegifyTranslationLoaderGuard],
    canActivateChild: [HasSelectedApplicationGuard],
    data: makeTranslationLoaderData('apply/APPLY-FIELDS')
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth-cor/auth-cor.module').then(
        (m) => m.AuthCorModule
      )
  }
];
