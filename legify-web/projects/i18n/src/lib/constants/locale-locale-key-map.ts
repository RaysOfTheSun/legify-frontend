import { LOCALE_KEY } from './locale-key-enum';
import { LOCALE_LANGUAGE_KEY } from './locale-language-key-enum';

export const LOCALE_TO_LOCALE_KEY_MAP = new Map<
  LOCALE_LANGUAGE_KEY,
  LOCALE_KEY
>([
  [LOCALE_LANGUAGE_KEY.EN, LOCALE_KEY.EN],
  [LOCALE_LANGUAGE_KEY.VI, LOCALE_KEY.VI]
]);
