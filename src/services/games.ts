import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.rawg.io/api/',
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => ({
        url: 'games',
        params: {
          key: '4f767cb6962b40b09489a9cc5567f186',
        },
      }),
    }),

    getGame: builder.query<any, number>({
      query: (gameId) => ({
        url: 'games',
        params: {
          key: '4f767cb6962b40b09489a9cc5567f186',
          id: gameId,
        },
      }),
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
