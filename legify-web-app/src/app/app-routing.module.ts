import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApplyDataLoaderGuard, ApplyConfigLoaderGuard } from '@legify/web-apply';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          loadChildren: () => import('./app-auth/app-auth.module').then((m) => m.AppAuthModule)
        },
        {
          path: 'apply',
          canActivate: [ApplyConfigLoaderGuard, ApplyDataLoaderGuard],
          loadChildren: () => import('./app-apply/app-apply.module').then((m) => m.AppApplyModule)
        },
        {
          path: '**',
          pathMatch: 'full',
          redirectTo: 'auth/login'
        }
      ],
      {
        useHash: true
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
