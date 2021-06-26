import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyDocumentsComponent } from '@legify/web-apply';

const routes: Routes = [
  {
    path: '',
    component: ApplyDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyDocumentsRoutingModule {}
