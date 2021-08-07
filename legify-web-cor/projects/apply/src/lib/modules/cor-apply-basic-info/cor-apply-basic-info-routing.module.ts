import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyBasicInfoComponent } from '@legify/web-apply';

const routes: Routes = [
  {
    path: '',
    component: ApplyBasicInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorApplyBasicInfoRoutingModule {}
