import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '../../config/config';

export const platformsApi = createApi({
  reducerPath: 'platformsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.baseApiEndpoint,
  }),
  endpoints: (builder) => ({
    getPlatforms: builder.query({
      query: () => ({
        url: 'platforms/lists/parents',
        params: { key: import.meta.env.VITE_RAWG_API_KEY },
      }),
    }),
  }),
});

export const { useGetPlatformsQuery } = platformsApi;
