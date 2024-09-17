import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gamesApi } from '../features/games/services/games.service';
import { genresApi } from '../features/genres/services/genres.service';
import { platformsApi } from '../features/header/services/platforms.service';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,

    [genresApi.reducerPath]: genresApi.reducer,
    [platformsApi.reducerPath]: platformsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(gamesApi.middleware)
      .concat(genresApi.middleware)
      .concat(platformsApi.middleware);
  },
});

setupListeners(store.dispatch);
