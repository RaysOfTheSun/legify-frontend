import { LEGIFY_MARKET } from '@legify/web-core';
import { TranslationLoaderData } from '../models';

export const makeTranslationLoaderData = (
  translationDataPath: string,
  appendCurrMarket = true,
  customMarket?: LEGIFY_MARKET
): TranslationLoaderData => {
  return { translationDataPath, appendCurrMarket, customMarket };
};
