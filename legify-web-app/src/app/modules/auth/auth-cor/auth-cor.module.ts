import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthCorRoutingModule } from './auth-cor-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AuthCorRoutingModule
  ]
})
export class AuthCorModule {}
