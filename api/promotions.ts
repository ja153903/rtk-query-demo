import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Promotion } from '../types';

export const promotionsApi = createApi({
  reducerPath: 'promotionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getPromotions: builder.query<Promotion[], void>({
      query: () => 'api/promotions/',
      transformResponse: (response: { promotions: Promotion[] }, _meta, _arg) =>
        response?.promotions ?? []
    })
  })
});

export const { useGetPromotionsQuery } = promotionsApi;
