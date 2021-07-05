import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';
import { LEGIFY_I18N_CONFIG } from './configs';
import {
  LegifyI18nConfigService,
  LegifyTranslationDataBuilderService,
  LegifyTranslationService
} from './services';

// TODO: implement a forRoot method as to make legify/web-core
// independent of legify/web-i18n
@NgModule({
  declarations: [],
  imports: [CommonModule, L10nTranslationModule.forRoot(LEGIFY_I18N_CONFIG)],
  providers: [
    LegifyTranslationService,
    LegifyTranslationDataBuilderService,
    LegifyI18nConfigService
  ],
  exports: [L10nTranslationModule]
})
export class LegifyI18nModule {}
