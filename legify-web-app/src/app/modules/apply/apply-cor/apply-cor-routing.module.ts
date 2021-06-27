import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorApplyComponent } from '@legify-cor/web-apply';

const routes: Routes = [
  {
    path: '',
    component: CorApplyComponent,
    children: [
      {
        path: 'documents',
        loadChildren: () =>
          import('@legify-cor/web-apply').then((m) => m.CorApplyDocumentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyCorRoutingModule {}
