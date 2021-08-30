import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';
import { LabelComponent } from './components/label/label.component';
import { CaptionPipe } from './pipes';

@NgModule({
  declarations: [LabelComponent, CaptionPipe],
  imports: [CommonModule, L10nTranslationModule],
  exports: [L10nTranslationModule, LabelComponent, CaptionPipe]
})
export class LegifyI18nModule {}
