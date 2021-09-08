import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegifyTranslationLoaderGuard, makeTranslationLoaderData } from '@legify/web-i18n';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./app-login/app-login.module').then((m) => m.AppLoginModule),
    canActivate: [LegifyTranslationLoaderGuard],
    data: makeTranslationLoaderData('auth/login/LOGIN-FIELDS-COR', false)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule {}
