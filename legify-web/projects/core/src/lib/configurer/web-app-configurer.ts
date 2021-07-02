import { AppConfigurer } from './app-configurer';

export const webAppConfigurer = (appConfigurer: AppConfigurer) => () =>
  appConfigurer.configure().toPromise();
