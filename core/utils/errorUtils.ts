import { AxiosError } from 'axios';

export function isAxiosError(error: AxiosError) {
  return error.isAxiosError === true;
}
