import { useQuery, UseQueryOptions } from 'react-query';

import { axiosInstance } from '@/core/axios/axios.config';

interface StatusListInterface {
  [key: string]: string;
}

export const getStatusList = async (): Promise<APIResponse<StatusListInterface>> =>
  await axiosInstance.get('/admin/product/statusList').then(({ data }) => data);

const useGetStatusList = ({
  options
}: {
  options?: UseQueryOptions<APIResponse<StatusListInterface>>;
}) => {
  return useQuery<APIResponse<StatusListInterface>>(
    ['useGetStatusList'],
    () => getStatusList(),
    options
  );
};

export default useGetStatusList;
