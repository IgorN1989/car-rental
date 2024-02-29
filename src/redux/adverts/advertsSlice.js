import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  items: [],
  favoriteAdverts: [],
  isLoading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 12,
  },
  modal: {
    content: null,
    isOpen: false,
  },
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,

  reducers: {
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.pagination.totalPages = action.payload;
    },
    onOpenModal: (state, action) => {
      state.modal.isOpen = true;
      state.modal.content = action.payload;
    },
    onCloseModal: (state, action) => {
      state.modal.isOpen = false;
      state.modal.content = null;
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
export const { setPage, setTotalPage, onOpenModal, onCloseModal } =
  advertsSlice.actions;

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
