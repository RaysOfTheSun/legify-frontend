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
      import('@legify-app/web-apply/cor-apply-wrapper.module').then(
        (m) => m.CorApplyWrapperModule
      ),
    canActivate: [HasSelectedApplicationGuard, LegifyTranslationLoaderGuard],
    canActivateChild: [HasSelectedApplicationGuard],
    data: makeTranslationLoaderData('apply/APPLY-FIELDS')
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@legify-app/web-auth/cor-auth-wrapper.module').then(
        (m) => m.CorAuthWrapperModule
      )
  }
];
