import { L10nLoader } from 'angular-l10n';
import { AppConfigurer } from './app-configurer';

export const webAppConfigurer =
  (appConfigurer: AppConfigurer, l10nLoader: L10nLoader) => () =>
    Promise.all([appConfigurer.configure().toPromise(), l10nLoader.init()]);
