import { PostBodyRefreshTokenInterface, ResponseLoginInterface } from '@/interface/UserInterface';

export const getRefreshToken = async ({
  token
}: PostBodyRefreshTokenInterface): Promise<ResponseLoginInterface> => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.APP_SERVICE_URL}/refreshToken`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'x-platform': process.env.APP_PLATFORM
      }
    })
      .then((res) => res.json())
      .then((res: ResponseLoginInterface) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};
