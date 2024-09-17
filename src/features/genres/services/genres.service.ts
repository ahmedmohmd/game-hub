import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '../../../../config/config';

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.baseApiEndpoint,
  }),

  endpoints: (builder) => ({
    getGenres: builder.query({
      query: () => ({
        url: 'genres',
        params: {
          key: import.meta.env.VITE_RAWG_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetGenresQuery } = genresApi;
