import 'react-i18next';

import { EnglishCommon, EnglishLoginPage, EnglishResetPassword } from '@/i18n/locales/en';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: undefined;

    resources: {
      common: typeof EnglishCommon;
      login: typeof EnglishLoginPage;
      resetPassword: typeof EnglishResetPassword;
    };
  }
}
