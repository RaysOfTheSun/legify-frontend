import { AppConfigurer } from './app-configurer';

export const appInitializer = (appConfigurer: AppConfigurer) => {
  return () => appConfigurer.configure();
};
