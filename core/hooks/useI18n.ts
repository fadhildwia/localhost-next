import i18n from 'i18next';

import { localStorageService } from '@/core/utils/localStorage';
import { EnglishCommon, EnglishLoginPage, EnglishResetPassword } from '@/i18n/locales/en';
import { BahasaCommon, BahasaLoginPage, BahasaResetPassword } from '@/i18n/locales/id';
import { LanguageType } from '@/interface/UserInterface';
// import { initReactI18next } from 'react-i18next';

export const useI18n = () => {
  const lng: LanguageType = (localStorageService.getLanguage('i18nextLng') as LanguageType) ?? 'en';

  const changeLanguage = async (to: LanguageType) => {
    if (i18n.isInitialized) {
      i18n.changeLanguage(to);
      localStorageService.setLanguage({ key: 'i18nextLng', value: to });
    }
  };

  const englishResources = {
    common: EnglishCommon,
    login: EnglishLoginPage,
    resetPassword: EnglishResetPassword
  };

  const bahasaResources = {
    common: BahasaCommon,
    login: BahasaLoginPage,
    resetPassword: BahasaResetPassword
  };

  const resources = {
    en: englishResources,
    id: bahasaResources
  };

  const config = {
    resources,
    lng,
    ns: ['common', 'login', 'resetPassword']
  };
  const init = () => {
    // TODO: fix this code
    // i18n.use(initReactI18next).init(config);
  };

  return { i18n, init, changeLanguage };
};
