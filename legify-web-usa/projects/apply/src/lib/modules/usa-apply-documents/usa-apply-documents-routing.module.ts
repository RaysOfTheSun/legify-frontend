import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsaApplyDocumentsComponent } from './usa-apply-documents.component';

const routes: Routes = [
  {
    path: '',
    component: UsaApplyDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsaApplyDocumentsRoutingModule {}
