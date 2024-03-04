import { renderHook } from '@testing-library/react-hooks';

import { wrapper } from '../../core/utils/testing-library-utils';
import useGetStatusList from '../useGetStatusList';
import usePostUserLogin from '../usePostUserLogin';

beforeAll(async () => {
  const { result, waitFor } = renderHook(() => usePostUserLogin(), {
    wrapper
  });

  result.current.mutate({
    email: 'fadhil@.com',
    password: '12345678',
    lang: 'en'
  });

  await waitFor(() => result.current.isSuccess, { timeout: 30000 });
  localStorage.setItem('access_token', result?.current?.data?.access_token || '');
});

describe('user get status list', () => {
  it('should fire useGetStatusList', async () => {
    const { result, waitFor } = renderHook(() => useGetStatusList({}), {
      wrapper
    });

    await waitFor(() => result.current.isSuccess, { timeout: 30000 });
    expect(result?.current?.data?.error === undefined || result.current.data.error === false).toBe(
      true
    );
  });
});

afterAll(() => {
  localStorage.removeItem('access_token');
});
