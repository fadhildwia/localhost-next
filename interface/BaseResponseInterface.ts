export interface BaseResponseInterface {
  error: boolean;
  errors?: Record<string, unknown>;
  message?: string | ErrorMessage;
}

export interface ErrorMessage {
  [key: string]: Array<string>;
}

export interface MetaResponseInterface {
  current_page?: number;
  from?: number;
  path?: string;
  per_page?: number;
  to?: number;
  total?: number;
  last_page?: number;
}

export interface ResourceListResponseInterface extends BaseResponseInterface {
  meta?: MetaResponseInterface;
}

export type SortingType = 'asc' | 'desc';
