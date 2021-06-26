import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from '@legify-usa/web-apply';

const routes: Routes = [
  {
    path: '',
    component: ApplyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyUsaRoutingModule {}