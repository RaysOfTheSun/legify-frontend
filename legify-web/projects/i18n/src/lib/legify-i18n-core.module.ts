import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
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
import { LegifyTranslationLoaderGuard } from './guards';

@NgModule({
  declarations: [],
  imports: [CommonModule, L10nTranslationModule.forRoot(LEGIFY_I18N_CONFIG)]
})
export class LegifyI18nCoreModule {
  constructor(@Optional() @SkipSelf() i18nCoreModule: LegifyI18nCoreModule) {
    if (i18nCoreModule) {
      throw new Error(
        'The Legifyi18nCoreModule should only be imported once; Please make sure that it is only imported in the app module.'
      );
    }
  }

  public static forRoot(): ModuleWithProviders<LegifyI18nCoreModule> {
    return {
      ngModule: LegifyI18nCoreModule,
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
