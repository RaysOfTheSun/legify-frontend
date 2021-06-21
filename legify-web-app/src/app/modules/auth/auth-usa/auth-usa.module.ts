import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUsaRoutingModule } from './auth-usa-routing.module';
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
    AuthUsaRoutingModule
  ]
})
export class AuthUsaModule {}
