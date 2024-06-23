import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from '../services/games.service';

import { setupListeners } from '@reduxjs/toolkit/query';
import { genresApi } from '../services/genres.service';
import { platformsApi } from '../services/platforms.service';

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
