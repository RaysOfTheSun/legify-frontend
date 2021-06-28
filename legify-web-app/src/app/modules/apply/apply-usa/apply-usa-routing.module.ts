import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsaApplyComponent } from '@legify-usa/web-apply';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyUsaRoutingModule {}
