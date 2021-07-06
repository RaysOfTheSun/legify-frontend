import { LegifyI18nConfigurer } from './legify-i18n-configurer';

export const webAppI18nConfigurer =
  (i18nConfigurer: LegifyI18nConfigurer) => () =>
    i18nConfigurer.configure().toPromise();
