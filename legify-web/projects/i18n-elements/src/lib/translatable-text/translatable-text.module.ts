import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatableTextComponent } from './translatable-text.component';
import { TranslatableTextPipe } from './pipes/translatable-text/translatable-text.pipe';

@NgModule({
  declarations: [TranslatableTextComponent, TranslatableTextPipe],
  imports: [CommonModule],
  exports: [TranslatableTextComponent, TranslatableTextPipe]
})
export class TranslatableTextModule {}
