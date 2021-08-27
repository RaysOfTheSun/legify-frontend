import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LegifyModalShellComponent } from './components/legify-modal-shell/legify-modal-shell.component';
import { LegifyI18nModule } from '@legify/web-i18n';

@NgModule({
  declarations: [LegifyModalShellComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, LegifyI18nModule],
  exports: [LegifyModalShellComponent]
})
export class LegifyModalModule {}
