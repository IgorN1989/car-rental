// import { createSelector } from '@reduxjs/toolkit';
// import { matchSorter } from 'match-sorter';

export const selectAdverts = state => state.adverts.items;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

export const selectPagination = state => state.adverts.pagination;

// export const selectFilters = state => state.filters;

// export const selectVisibleAdverts = createSelector(
//   [selectAdverts, selectFilters],
//   (adverts, filters) => {
//     return matchSorter(adverts, filters, { keys: ['make'] });
//   }
// );
