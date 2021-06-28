import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsaLoginComponent } from './usa-login.component';

const routes: Routes = [
  {
    path: '',
    component: UsaLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsaLoginRoutingModule {}
