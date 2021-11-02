import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getRepositories, getRepositoriesError,
  getRepositoriesSuccess
} from '../actions/repository.actions';
import { of } from 'rxjs';
import { SearchRepositoriesService } from '../../shared/services/search-repositories.service';

@Injectable()
export class RepositoryEffects {

  getAllRepositories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRepositories),
      switchMap(({ params }) => {
        return this.searchRepositoriesService.getAllRepositories(params.q);
      }),
      map((items) => getRepositoriesSuccess({ items })),
      catchError((items) => {
        return of(getRepositoriesError({ items }))
      })
    )
  );

  constructor(
    private actions$: Actions,
    private searchRepositoriesService: SearchRepositoriesService
  ) { }
}
