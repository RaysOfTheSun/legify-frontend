import { LEGIFY_MARKET } from '@legify/web-core';

export interface TranslationLoaderData {
  customMarket?: LEGIFY_MARKET;
  appendCurrMarket?: boolean;
  translationDataPath: string;
}
