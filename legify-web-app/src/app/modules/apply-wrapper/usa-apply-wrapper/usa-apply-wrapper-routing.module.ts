import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsaApplyComponent } from '@legify-usa/web-apply';

import {
  LegifyTranslationLoaderGuard,
  makeTranslationLoaderData
} from '@legify/web-i18n';

const routes: Routes = [
  {
    path: '',
    component: UsaApplyComponent,
    children: [
      {
        path: 'documents',
        loadChildren: () =>
          import('@legify-usa/web-apply').then((m) => m.UsaApplyDocumentsModule)
      }
    ],
    canActivate: [LegifyTranslationLoaderGuard],
    data: makeTranslationLoaderData('apply/APPLY-DOCUMENTS-FIELDS')
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsaApplyWrapperRoutingModule {}
