import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LegifyModalShellComponent } from './components/legify-modal-shell/legify-modal-shell.component';
import { TranslatableTextModule } from '@legify/web-i18n-elements';

@NgModule({
  declarations: [LegifyModalShellComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    TranslatableTextModule
  ],
  exports: [LegifyModalShellComponent]
})
export class LegifyModalModule {}
