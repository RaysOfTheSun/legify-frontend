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
      import('@legify-app/web-apply/usa-apply-wrapper.module').then(
        (m) => m.UsaApplyWrapperModule
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
      import('@legify-app/web-auth/usa-auth-wrapper.module').then(
        (m) => m.UsaAuthWrapperModule
      )
  }
];
