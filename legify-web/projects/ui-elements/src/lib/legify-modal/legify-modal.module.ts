import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LegifyI18nModule } from '@legify/web-i18n';
import { ModalShellComponent } from './components';
import { ModalHeaderDirective, ModalFooterDirective, ModalContentDirective } from './directives';

@NgModule({
  declarations: [ModalHeaderDirective, ModalFooterDirective, ModalContentDirective, ModalShellComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, LegifyI18nModule],
  exports: [ModalHeaderDirective, ModalFooterDirective, ModalContentDirective, ModalShellComponent, MatDialogModule]
})
export class LegifyModalModule {}
