import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { L10nTranslationModule } from 'angular-l10n';
import { LEGIFY_I18N_CONFIG } from './configs';
import {
  LegifyI18nConfigService,
  LegifyI18nHttpDataService,
  LegifyTranslationDataBuilderService,
  LegifyTranslationService
} from './services';
import { LegifyI18nConfigurer } from './configurer';
import { LegifyTranslationLoaderGuard } from './guards/legify-translation-loader/legify-translation-loader.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule, L10nTranslationModule.forRoot(LEGIFY_I18N_CONFIG)],
  exports: [L10nTranslationModule]
})
export class LegifyI18nModule {
  constructor(@Optional() @SkipSelf() i18nModule: LegifyI18nModule) {
    if (i18nModule) {
      throw new Error('You cannot reimport the i18n Module.');
    }
  }

  public static forRoot(): ModuleWithProviders<LegifyI18nModule> {
    return {
      ngModule: LegifyI18nModule,
      providers: [
        LegifyI18nConfigurer,
        LegifyI18nConfigService,
        LegifyTranslationService,
        LegifyI18nHttpDataService,
        LegifyTranslationLoaderGuard,
        LegifyTranslationDataBuilderService
      ]
    };
  }
}
