import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorApplyComponent } from '@legify-cor/web-apply';

import {
  LegifyTranslationLoaderGuard,
  makeTranslationLoaderData
} from '@legify/web-i18n';

const routes: Routes = [
  {
    path: '',
    component: CorApplyComponent,
    children: [
      {
        path: 'documents',
        loadChildren: () =>
          import('@legify-cor/web-apply').then(
            (m) => m.CorApplyDocumentsModule
          ),
        canActivate: [LegifyTranslationLoaderGuard],
        data: makeTranslationLoaderData('apply/APPLY-DOCUMENTS-FIELDS')
      },
      {
        path: 'basic-info',
        loadChildren: () =>
          import('@legify-cor/web-apply').then(
            (m) => m.CorApplyBasicInfoModule
          ),
        canActivate: [LegifyTranslationLoaderGuard],
        data: makeTranslationLoaderData('apply/APPLY-BASIC-INFO-FIELDS')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorApplyWrapperRoutingModule {}
