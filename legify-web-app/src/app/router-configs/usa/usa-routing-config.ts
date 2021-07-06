import { Routes } from '@angular/router';
import { HasSelectedApplicationGuard } from '@legify/web-core';
import {
  LegifyTranslationLoaderGuard,
  makeTranslationLoaderData
} from '@legify/web-i18n';
import { LEGIFY_MARKET } from '@legify/web-core';

export const usaRoutingConfig: Routes = [
  {
    path: 'apply',
    loadChildren: () =>
      import('../../modules/apply/apply-usa/apply-usa.module').then(
        (m) => m.ApplyUsaModule
      ),
    canActivate: [LegifyTranslationLoaderGuard, HasSelectedApplicationGuard],
    canActivateChild: [HasSelectedApplicationGuard],
    data: makeTranslationLoaderData(
      'apply/APPLY-FIELDS',
      true,
      LEGIFY_MARKET.COR
    )
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth-usa/auth-usa.module').then(
        (m) => m.AuthUsaModule
      )
  }
];
