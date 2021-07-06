import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthShellModule } from '@legify/web-ui-elements';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TranslatableTextModule } from '@legify/web-i18n-elements';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    AuthShellModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TranslatableTextModule
  ],
  exports: [LoginComponent]
})
export class LegifyLoginModule {}
