import { TranslationDataLoaderConfig } from '../models/translation-data-loader-config';

export const defaultTranslationDataLoaderConfig: TranslationDataLoaderConfig = {
  fallbackToCore: true,
  alwaysAppendCurrMarket: true,
  translationDataBasePath: 'assets/i18n'
};
