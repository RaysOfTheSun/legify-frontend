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
import { MatButtonModule } from '@angular/material/button';
import { ApplyShellHeaderBreadcrumbItemComponent } from './components/apply-shell-header-breadcrumb-item/apply-shell-header-breadcrumb-item.component';
import { LegifyI18nModule } from '@legify/web-i18n';

@NgModule({
  declarations: [
    ApplyShellComponent,
    ApplyShellHeaderComponent,
    ApplyShellSidenavComponent,
    ApplyShellSidenavItemComponent,
    ApplyShellHeaderBreadcrumbItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    AvatarModule,
    MatButtonModule,
    HttpClientModule,
    LegifyI18nModule
  ],
  exports: [ApplyShellComponent]
})
export class ApplyShellModule {}
