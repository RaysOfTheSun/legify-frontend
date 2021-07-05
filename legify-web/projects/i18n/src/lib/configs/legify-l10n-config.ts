import { L10nConfig } from 'angular-l10n';

export const LEGIFY_I18N_CONFIG: L10nConfig = {
  format: 'language-script-region',
  keySeparator: '.',
  defaultLocale: { language: 'en-US' },
  providers: [],
  schema: [
    {
      locale: { language: 'en-US' }
    },
    {
      locale: { language: 'vi-VN' }
    }
  ]
};
