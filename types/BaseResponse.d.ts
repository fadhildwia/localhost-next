type SortingType = 'asc' | 'desc';

interface APIResponse<D> {
  data: D;
  message: string;
  error: boolean;
  links?: Links;
  meta?: MetaInteface;
}

type APIError = AxiosError<APIResponse<never>>;

interface MetaResponseInterface {
  current_page?: number;
  from?: number;
  path?: string;
  per_page?: number;
  to?: number;
  total?: number;
  last_page?: number;
}

interface BaseSortInterface<SortByType> {
  sort: SortByType;
  sortBy?: string;
  page: number;
}

interface BaseDefaultFilterInterface {
  defaultPage: number;
  defaultPerPage: number;
  defaultSort: SortingType;
  defaultSortBy: string;
}

interface BaseDefaultParamInterface {
  page: number;
  per_page: number;
  sort: SortingType;
  sort_by: string;
}
