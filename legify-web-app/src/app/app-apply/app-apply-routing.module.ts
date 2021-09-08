import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from '@legify/web-apply';
import { TranslationDataLoaderGuard } from '../app-i18n/guards/translation-data-loader/translation-data-loader.guard';

const routes: Routes = [
  {
    path: '',
    component: ApplyComponent,
    canActivate: [TranslationDataLoaderGuard],
    data: { translationDataPath: 'apply/APPLY-FIELDS' },
    children: [
      {
        path: 'basic-info',
        loadChildren: () =>
          import('@legify/app-web-apply/modules/app-apply-basic-info/app-apply-basic-info.module').then(
            ({ AppApplyBasicInfoModule }) => AppApplyBasicInfoModule
          ),
        canActivate: [TranslationDataLoaderGuard],
        data: { translationDataPath: 'apply/APPLY-BASIC-INFO-FIELDS' }
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('@legify/app-web-apply/modules/app-apply-documents/app-apply-documents.module').then(
            ({ AppApplyDocumentsModule }) => AppApplyDocumentsModule
          ),
        canActivate: [TranslationDataLoaderGuard],
        data: { translationDataPath: 'apply/APPLY-DOCUMENTS-FIELDS' }
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
