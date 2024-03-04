import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const axiosBaseConfigOptions: AxiosRequestConfig = {
  timeout: 30000,
  headers: {
    'x-platform': process.env.APP_PLATFORM
  }
};

export const axiosInterceptorRequest = async (headerConfig: AxiosRequestConfig) => {
  const access_token = Cookies.get('access_token') ?? (await localStorage.getItem('access_token'));
  headerConfig.headers.Authorization = `Bearer ${access_token}`;
  return headerConfig;
};

export const axiosInterceptorResponseError = async (error: AxiosError) => {
  // TODO: logic for handle 406 or 401
  return Promise.reject(error);
};

const defaultOptions: AxiosRequestConfig = {
  ...axiosBaseConfigOptions,
  baseURL: process.env.APP_SERVICE_URL
};
export const axiosInstance = axios.create(defaultOptions);
axiosInstance.interceptors.request.use(axiosInterceptorRequest);
// FIXME: infinite loading when user open this web app in more than one browsers
axiosInstance.interceptors.response.use((response) => response, axiosInterceptorResponseError);
