import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LegifyTranslationLoaderGuard,
  makeTranslationLoaderData
} from '@legify/web-i18n';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@legify-cor/web-auth').then((m) => m.CorLoginModule),
    canActivate: [LegifyTranslationLoaderGuard],
    data: makeTranslationLoaderData('auth/login/LOGIN-FIELDS')
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorAuthWrapperRoutingModule {}
