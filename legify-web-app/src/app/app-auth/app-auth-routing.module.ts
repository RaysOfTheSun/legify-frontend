import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslationDataLoaderGuard } from '../app-i18n/guards/translation-data-loader/translation-data-loader.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./app-login/app-login.module').then((m) => m.AppLoginModule),
    canActivate: [TranslationDataLoaderGuard],
    data: { translationDataPath: 'auth/login/LOGIN-FIELDS' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAuthRoutingModule {}
