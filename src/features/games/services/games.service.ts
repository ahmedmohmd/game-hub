import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '../../../../config/config';
import { Game } from '../types/games.types';

// Types
interface IParams {
  key: string;
  genres?: string;
  platforms?: number;
  ordering?: string;
  search?: string;
  order?: string;
  page_size?: number;
  page?: number;
}

interface IResponse {
  url: string;
  params: IParams;
}

// interface IKeys {
//   genreSlug: string;
//   platform: number;
//   orderBy: string;
//   searchText: string;
//   order: string;
// }

// interface GamesResponse {
//   results: Game[];
// }

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.baseApiEndpoint,
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: ({ genreSlug, platform, orderBy, searchText, order, page }) => {
        const responseObject: IResponse = {
          url: 'games',
          params: { key: import.meta.env.VITE_RAWG_API_KEY, page_size: 12, page },
        };

        if (genreSlug) responseObject.params.genres = genreSlug;
        if (platform) responseObject.params.platforms = platform;
        if (orderBy) responseObject.params.order = orderBy;
        if (searchText) responseObject.params.search = searchText;
        if (order)
          responseObject.params.ordering =
            order === 'desc'
              ? '-' + responseObject.params.ordering
              : responseObject.params.ordering;

        return responseObject;
      },
    }),

    getGame: builder.query<Game, number>({
      query: (gameId) => ({
        url: `games/${gameId}`,
        params: {
          key: import.meta.env.VITE_RAWG_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetGamesQuery, useGetGameQuery } = gamesApi;
