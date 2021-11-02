import { initialRepositoryState, IRepositoryState } from '../state/repository.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getRepositories, getRepositoriesError,
  getRepositoriesSuccess, setFilter
} from '../actions/repository.actions';

const _repositoryReducer = createReducer(
  initialRepositoryState,
  on(getRepositories, (state, { params }) => {
    return { ...state, params, isActiveLoader: true };
  }),
  on(getRepositoriesSuccess, (state, { items }) => {
    return { ...state, items, isActiveLoader: false };
  }),
  on(getRepositoriesError, (state, { items }) => {
    return { ...state, items, isActiveLoader: false };
  }),
  on(setFilter, (state, { language }) => {
    return { ...state, language };
  })
);

export function repositoryReducer(state: IRepositoryState | undefined, action: Action) {
  return _repositoryReducer(state, action);
}
