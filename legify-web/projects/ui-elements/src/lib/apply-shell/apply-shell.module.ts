import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyShellComponent } from './apply-shell.component';
import { ApplyShellHeaderComponent } from './components/apply-shell-header/apply-shell-header.component';
import { ApplyShellSidenavComponent } from './components/apply-shell-sidenav/apply-shell-sidenav.component';
import { RouterModule } from '@angular/router';
import { ApplyShellSidenavItemComponent } from './components/apply-shell-sidenav-item/apply-shell-sidenav-item.component';

import { AvatarModule } from 'ngx-avatar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ApplyShellComponent,
    ApplyShellHeaderComponent,
    ApplyShellSidenavComponent,
    ApplyShellSidenavItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    AvatarModule,
    HttpClientModule
  ],
  exports: [ApplyShellComponent]
})
export class ApplyShellModule {}
