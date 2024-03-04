type LocalStorageKeyType = 'expire_token';
type LanguageKeyType = 'i18nextLng';
type ActiveCompanyType = 'active_company';
type NotificationType = 'notification';

interface GetLocalStorageInterface {
  key: LocalStorageKeyType | LanguageKeyType | ActiveCompanyType | NotificationType;
}
interface SetLocalStorageInterface extends GetLocalStorageInterface {
  value?: string;
}

export const localStorageService = (() => {
  let _service: unknown;

  function _getService(this: {
    getService: () => unknown;
    setToken: ({ key, value }: SetLocalStorageInterface) => void;
    getToken: (key: 'expire_token') => string | null;
    setNotification: ({ key, value }: SetLocalStorageInterface) => void;
    getNotification: (key: 'notification') => string | null;
    clearToken: (key: 'expire_token') => void;
    setLanguage: ({ key, value }: SetLocalStorageInterface) => void;
    getLanguage: (key: 'i18nextLng') => string | null;
  }) {
    if (!_service) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setItem({ key, value }: { key: string; value: string }) {
    localStorage.setItem(key, value);
  }
  function _setToken({ key, value }: SetLocalStorageInterface) {
    if (value) {
      localStorage.setItem(key, value);
    }
  }
  function _getToken(key: LocalStorageKeyType) {
    return localStorage.getItem(key);
  }

  // eslint-disable-next-line sonarjs/no-identical-functions
  function _setNotification({ key, value }: SetLocalStorageInterface) {
    if (value) {
      localStorage.setItem(key, value);
    }
  }
  function _getNotification(key: NotificationType) {
    return localStorage.getItem(key);
  }
  function _clearToken(key: LocalStorageKeyType) {
    localStorage.removeItem(key);
  }
  function _setLanguage({ key, value }: SetLocalStorageInterface) {
    if (value) {
      _setItem({
        key,
        value
      });
    }
  }
  function _getLanguage(key: LanguageKeyType) {
    if (typeof window !== 'undefined') return localStorage?.getItem(key);
    return null;
  }
  return {
    getService: _getService,
    setToken: _setToken,
    getToken: _getToken,
    setNotification: _setNotification,
    getNotification: _getNotification,
    clearToken: _clearToken,
    setLanguage: _setLanguage,
    getLanguage: _getLanguage
  };
})();
