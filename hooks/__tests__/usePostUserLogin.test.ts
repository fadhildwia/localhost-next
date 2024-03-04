import { renderHook } from '@testing-library/react-hooks';

import { wrapper } from '../../core/utils/testing-library-utils';
import usePostUserLogin from '../usePostUserLogin';

describe('User Login', () => {
  it('should fire usePostUserLogin', async () => {
    const { result, waitFor } = renderHook(() => usePostUserLogin(), {
      wrapper: wrapper
    });
    result.current.mutate({
      email: 'fadhil@.com',
      password: '12345678',
      lang: 'en'
    });
    await waitFor(() => result.current.isSuccess, { timeout: 3000 });
    expect(result.current.data).toBeDefined();
  });
});
