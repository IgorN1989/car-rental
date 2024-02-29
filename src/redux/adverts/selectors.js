export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectPagination = state => state.adverts.pagination;

export const selectPage = state => selectPagination(state).page;

export const selectModalContent = state => state.adverts.modal.content;

export const selectModalStatus = state => state.adverts.modal.isOpen;
