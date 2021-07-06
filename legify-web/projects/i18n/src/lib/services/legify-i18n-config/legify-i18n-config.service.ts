import { Injectable } from '@angular/core';
import {
  LOCALE_KEY,
  LOCALE_LANGUAGE_KEY,
  LOCALE_TO_LOCALE_KEY_MAP
} from '../../constants';

@Injectable()
export class LegifyI18nConfigService {
  constructor() {}

  get localeMap(): Map<LOCALE_LANGUAGE_KEY, LOCALE_KEY> {
    return LOCALE_TO_LOCALE_KEY_MAP;
  }

  get languageKeys(): string[] {
    return Object.values(LOCALE_LANGUAGE_KEY);
  }
}
