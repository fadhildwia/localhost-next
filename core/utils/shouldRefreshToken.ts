import { compareDesc, getTime, parseISO } from 'date-fns';
import { ResponseLoginInterface } from 'interface/UserInterface';
import Cookies from 'js-cookie';

import { getRefreshToken } from '@/app/api/GET_RefreshToken';

import { appCookies } from './appCookies';

export const shouldRefreshToken = async () => {
  const { getCookie } = appCookies();
  const localExpireToken = await getCookie({ name: 'expire_token' });

  if (localExpireToken) {
    const current_time = getTime(new Date());
    const expire_token = getTime(parseISO(localExpireToken));
    return compareDesc(current_time, expire_token) === -1;
  }

  return false;
};

export const removeToken = () => {
  const { removeCookie } = appCookies();
  removeCookie({ name: 'access_token' });
  removeCookie({ name: 'refresh_token' });
  removeCookie({ name: 'expire_token' });
  window.location.pathname = '/';
};

export const syncRefreshToken = async (refreshToken?: string): Promise<ResponseLoginInterface> => {
  const { setCookie } = appCookies();
  const refresh_token = refreshToken ?? Cookies.get('refresh_token');

  return await getRefreshToken({
    token: refresh_token
  }).then((res) => {
    if (res.error) {
      removeToken();
    }

    if (!res?.error) {
      setCookie({
        name: 'access_token',
        value: res.access_token
      });
      setCookie({
        name: 'refresh_token',
        value: res.refresh_token!
      });

      setCookie({
        name: 'expire_token',
        value: res.expire_token!.toString()
      });
    }

    return res;
  });
};
