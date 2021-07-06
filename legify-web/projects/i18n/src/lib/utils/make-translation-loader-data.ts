import { TranslationLoaderData } from '../models';

export const makeTranslationLoaderData = (
  translationDataPath: string,
  appendCurrMarket = true
): TranslationLoaderData => {
  return { translationDataPath, appendCurrMarket };
};
