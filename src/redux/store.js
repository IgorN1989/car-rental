import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
import { filtersReducer } from './adverts/filtersSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    filters: filtersReducer,
  },
});
