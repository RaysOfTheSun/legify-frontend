import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorApplyDocumentsComponent } from './cor-apply-documents.component';

const routes: Routes = [
  {
    path: '',
    component: CorApplyDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorApplyDocumentsRoutingModule {}
