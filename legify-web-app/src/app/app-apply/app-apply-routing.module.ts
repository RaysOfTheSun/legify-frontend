import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from '@legify/web-apply';
import { LegifyTranslationLoaderGuard, makeTranslationLoaderData } from '@legify/web-i18n';

const routes: Routes = [
  {
    path: '',
    component: ApplyComponent,
    canActivate: [LegifyTranslationLoaderGuard],
    data: makeTranslationLoaderData('apply/APPLY-FIELDS-COR', false),
    children: [
      {
        path: 'basic-info',
        loadChildren: () =>
          import('@legify/app-web-apply/modules/app-apply-basic-info/app-apply-basic-info.module').then(
            ({ AppApplyBasicInfoModule }) => AppApplyBasicInfoModule
          ),
        canActivate: [LegifyTranslationLoaderGuard],
        data: makeTranslationLoaderData('apply/APPLY-BASIC-INFO-FIELDS-COR', false)
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('@legify/app-web-apply/modules/app-apply-documents/app-apply-documents.module').then(
            ({ AppApplyDocumentsModule }) => AppApplyDocumentsModule
          ),
        canActivate: [LegifyTranslationLoaderGuard],
        data: makeTranslationLoaderData('apply/APPLY-DOCUMENTS-FIELDS')
      },
      {
        path: '**',
        redirectTo: 'basic-info',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppApplyRoutingModule {}
