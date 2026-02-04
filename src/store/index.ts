import { configureStore } from '@reduxjs/toolkit';
import helloSlice from './slices/favorites';
export const store = configureStore({
  reducer: {
    hello: helloSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
