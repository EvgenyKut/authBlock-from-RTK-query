import { Error } from './models';

export interface Data {
  Error: Error[];
}

export interface ErrorResponse {
  status: number;
  data: Data;
}
