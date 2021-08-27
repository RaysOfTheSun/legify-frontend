import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [LabelComponent],
  imports: [CommonModule, L10nTranslationModule],
  exports: [L10nTranslationModule, LabelComponent]
})
export class LegifyI18nModule {}
