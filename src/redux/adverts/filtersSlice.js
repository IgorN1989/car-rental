import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  reducers: {
    setFilters(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilters } = filtersSlice.actions;
