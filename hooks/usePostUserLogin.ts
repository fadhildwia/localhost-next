import { AxiosError } from 'axios';
import { PostBodyLoginInterface, ResponseLoginInterface } from 'interface/UserInterface';
import { useMutation, UseMutationOptions } from 'react-query';

import { axiosInstance } from '@/core/axios/axios.config';

export const postUserLogin = async (
  body: PostBodyLoginInterface
): Promise<ResponseLoginInterface> =>
  await axiosInstance.post('/login', body).then(({ data }) => data);

function usePostUserLogin(
  mutateFn?: UseMutationOptions<
    ResponseLoginInterface,
    AxiosError<ResponseLoginInterface>,
    PostBodyLoginInterface
  >
) {
  return useMutation<
    ResponseLoginInterface,
    AxiosError<ResponseLoginInterface>,
    PostBodyLoginInterface
  >(postUserLogin, mutateFn);
}

export default usePostUserLogin;
