import { createAction, props } from '@ngrx/store';
import { IParams } from '../../interfaces/params-inrerface';
import { IRepository } from '../../interfaces/repository-interface';

export const getRepositories = createAction(
  '[Repositories] Get Repositories',
  props<{ params: IParams }>()
)

export const getRepositoriesSuccess = createAction(
  '[Repositories] Get Repositories Success',
  props<{ items: IRepository[] }>()
)

export const getRepositoriesError = createAction(
  '[Repositories] Get Repositories Error',
  props<{ items: IRepository[] }>()
)

export const setFilter = createAction(
  '[Repositories] Set Filtered Repositories',
  props<{ language: string }>()
)
