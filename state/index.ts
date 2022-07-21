import { configureStore } from '@reduxjs/toolkit';

import { promotionsApi } from '../api/promotions';

export const store = configureStore({
  reducer: {
    [promotionsApi.reducerPath]: promotionsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(promotionsApi.middleware)
});
