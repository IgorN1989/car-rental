import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    favoriteAdverts: [],
    isLoading: false,
    error: null,
    pagination: {
      page: 1,
      limit: 12,
    },
  },

  reducers: {
    onLoadMore: state => {
      state.pagination.page += 1;
    },
  },

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
  state.items.push(...action.payload);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
