import { configureStore } from '@reduxjs/toolkit';
import banksReducer from './slices/bankSlice';

export const store = configureStore({
  reducer: { banks: banksReducer },
});

export type RootState = ReturnType<typeof store.getState>;
