import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: { items: [], favorites: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, handleFetchFulfilled)
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;

const handlePending = state => {
  state.isLoading = true;
};

const handleFetchFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
