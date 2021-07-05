import { Routes } from '@angular/router';
import { HasSelectedApplicationGuard } from '@legify/web-core';
import { TranslationGuard } from 'src/app/guards/translation.guard';
import { ApplyTranslationGuard } from 'src/app/modules/apply/guards/apply-translation.guard';

export const corRouterConfig: Routes = [
  {
    path: 'apply',
    loadChildren: () =>
      import('../../modules/apply/apply-cor/apply-cor.module').then(
        (m) => m.ApplyCorModule
      ),
    canActivate: [HasSelectedApplicationGuard],
    canActivateChild: [HasSelectedApplicationGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../modules/auth/auth-cor/auth-cor.module').then(
        (m) => m.AuthCorModule
      ),
    canActivate: [ApplyTranslationGuard]
  }
];
