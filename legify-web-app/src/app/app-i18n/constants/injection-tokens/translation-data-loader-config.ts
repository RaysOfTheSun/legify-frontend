import { InjectionToken } from '@angular/core';
import { TranslationDataLoaderConfig } from '../../models/translation-data-loader-config';

export const I18N_TRANSLATION_LOADER_CONFIG = new InjectionToken<TranslationDataLoaderConfig>(
  'i18nTranslationDataLoaderConfig'
);
