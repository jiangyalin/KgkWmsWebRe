import type { Method } from './enum'

export interface Result {
  code?: string | number | null;
  msg?: string;
}

export interface ResultData<T = any> extends Result {
  data?: T;
  code?: string | number | null;
  msg?: any;
}

export interface ResPage {
  pageNo: number;
  pageSize: number;
  [propName: string]: any;
}

export interface Parameter {
  query?: Record<any, any>;
  body?: Record<any, any>;
  headers?: Record<string, any>;
  [propName: string]: any;
}

export interface RequestFunc {
  (
    api: {
      url: string;
      method: Method;
      baseUrl?: string;
      responseType?: string;
    },
    data: Parameter,
    showErrMsg?: boolean
  ): any;
}
