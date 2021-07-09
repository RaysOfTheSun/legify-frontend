import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LegifyTranslationLoaderGuard,
  makeTranslationLoaderData
} from '@legify/web-i18n';
import { LEGIFY_MARKET } from '@legify/web-core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@legify-usa/web-auth').then((m) => m.UsaLoginModule),
    canActivate: [LegifyTranslationLoaderGuard],
    data: makeTranslationLoaderData(
      'auth/login/LOGIN-FIELDS',
      true,
      LEGIFY_MARKET.COR
    )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsaAuthWrapperRoutingModule {}
