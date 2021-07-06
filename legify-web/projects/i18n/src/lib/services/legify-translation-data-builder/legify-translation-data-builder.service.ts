import { Injectable } from '@angular/core';
import { LegifyTranslationMap } from '../../models/legify-translation-map';

@Injectable()
export class LegifyTranslationDataBuilderService {
  constructor() {}

  public buildTranslationDataFromMap(
    translationMap: LegifyTranslationMap,
    localLanguage: string
  ): Record<string, string> {
    const transationNames = Object.keys(translationMap);
    return transationNames.reduce(
      (prev, curr) => ({
        ...prev,
        [curr]: translationMap[curr][localLanguage]
      }),
      {}
    );
  }
}
