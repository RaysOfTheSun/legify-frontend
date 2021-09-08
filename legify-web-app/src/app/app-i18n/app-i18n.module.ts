import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslationDataLoaderGuard } from './guards/translation-data-loader/translation-data-loader.guard';
import { I18N_TRANSLATION_LOADER_CONFIG } from './constants/injection-tokens/translation-data-loader-config';
import { defaultTranslationDataLoaderConfig } from './configs/default-i18n-data-loader-config';

@NgModule()
export class AppI18nModule {
  public static forRoot(): ModuleWithProviders<AppI18nModule> {
    return {
      ngModule: AppI18nModule,
      providers: [
        TranslationDataLoaderGuard,
        {
          provide: I18N_TRANSLATION_LOADER_CONFIG,
          useValue: defaultTranslationDataLoaderConfig
        }
      ]
    };
  }
}
