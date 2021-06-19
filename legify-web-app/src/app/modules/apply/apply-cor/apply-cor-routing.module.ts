import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from '@legify-cor/web-apply';

const routes: Routes = [
  {
    path: '',
    component: ApplyComponent,
    children: [
      {
        path: 'documents',
        loadChildren: () =>
          import('@legify-cor/web-apply').then((m) => m.ApplyDocumentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyCorRoutingModule {}
