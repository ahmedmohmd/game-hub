import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import configs from '../../config/config';
import { Game } from '../types/games.types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: configs.baseApiEndpoint,
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: ({ genreSlug, platform }) => {
        const returenedObject: {
          url: string;
          params: { key: string; genres?: string; platforms?: number };
        } = {
          url: 'games',
          params: { key: import.meta.env.VITE_RAWG_API_KEY },
        };

        if (genreSlug) {
          returenedObject.params.genres = genreSlug;
        }

        if (platform) {
          returenedObject.params.platforms = platform;
        }

        return returenedObject;
      },
    }),

    getGame: builder.query<Game, number>({
      query: (gameId) => ({
        url: 'games',
        params: {
          key: import.meta.env.VITE_RAWG_API_KEY,
          id: gameId,
        },
      }),
    }),
  }),
});

export const { useGetGamesQuery } = gamesApi;
