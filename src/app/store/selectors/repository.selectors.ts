import { createSelector } from '@ngrx/store';
import { IAppState } from '../../interfaces/app-state.interface';

export const selectRepositoryState = (state: IAppState) => {
  return state.repositories;
};

export const selectFilteredRepositories = createSelector(
  selectRepositoryState,
  (state) => {
    return !state.language
      ? state.items
      : state.items.filter((repository) => repository.language === state.language);
  }
);

export const selectAllFilters = createSelector(
  selectRepositoryState,
  (state) => {
    return { name: state.params.q, language: state.language }
  }
)

export const selectLoader = createSelector(
  selectRepositoryState,
  (state) => state.isActiveLoader
);
