import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { LegifyModalShellComponent } from './components/legify-modal-shell/legify-modal-shell.component';

@NgModule({
  declarations: [LegifyModalShellComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule],
  exports: [LegifyModalShellComponent]
})
export class LegifyModalModule {}
