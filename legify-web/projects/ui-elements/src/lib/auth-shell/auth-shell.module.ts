import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthShellComponent } from './auth-shell.component';
import { AuthShellHeaderComponent } from './components/auth-shell-header/auth-shell-header.component';
import { AuthShellFooterComponent } from './components/auth-shell-footer/auth-shell-footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthShellComponent,
    AuthShellHeaderComponent,
    AuthShellFooterComponent
  ],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [
    RouterModule,
    MatIconModule,
    AuthShellComponent,
    AuthShellHeaderComponent,
    AuthShellFooterComponent
  ]
})
export class AuthShellModule {}
