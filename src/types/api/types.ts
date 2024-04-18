import { USER_ROLES_TYPE } from '../user';

export interface IHttpResponse<TData = any> {
  status?: number;
  message?: string[] | string;
  data?: TData;
}

export interface IQueryResponse<TData = any> {
  totalPages: number;
  totalRecords: number;
  totalRecordsPerPage: number;
  currentPage: number;
  data: TData[];
  metrics?: IMetrics;
}

export interface IMetrics {
  [key: string]: any;
}

export type IQuery<T = any> = T & {
  limit: number;
  search_value: string | null;
  page: number;
  sort_by: keyof T;
  order_by: -1 | 1 | 'asc' | 'ascending' | 'desc' | 'descending';
  role: USER_ROLES_TYPE;
  status: string;
  startDate?: string;
  endDate?: string;
};
