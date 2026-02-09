import { configureStore } from '@reduxjs/toolkit';
import favoriteSlice from 'store/slices/favorites';
import coreSlice from 'store/slices/coreSlice';
export const store = configureStore({
   reducer: {
      favorite: favoriteSlice,
      core: coreSlice,
   },
});
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
