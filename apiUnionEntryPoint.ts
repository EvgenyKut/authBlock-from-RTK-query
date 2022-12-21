import { createApi } from '@reduxjs/toolkit/query/react';

import { fetchBaseQueryWithCamelize } from './common';

export const apiUnionEntryPoint = createApi({
  reducerPath: 'apiUnionEntryPoint',
  baseQuery: fetchBaseQueryWithCamelize({ baseUrl: '' }),
  endpoints: () => ({}),
});
