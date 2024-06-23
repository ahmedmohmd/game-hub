import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '../../config/config';

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

    // getGame: builder.query<any, number>({
    //   query: (gameId) => ({
    //     url: 'games',
    //     params: {
    //       key: '4f767cb6962b40b09489a9cc5567f186',
    //       id: gameId,
    //     },
    //   }),
    // }),
  }),
});

export const { useGetGenresQuery } = genresApi;
