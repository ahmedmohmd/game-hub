import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from '../services/games';

import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(gamesApi.middleware);
  },
});

setupListeners(store.dispatch);
