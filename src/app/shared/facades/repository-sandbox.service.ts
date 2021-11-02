import { Injectable } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { getRepositories, setFilter } from '../../store/actions/repository.actions';
import { selectAllFilters, selectFilteredRepositories, selectLoader } from '../../store/selectors/repository.selectors';
import { IRepository } from '../../interfaces/repository-interface';
import { IAppState } from '../../interfaces/app-state.interface';

@Injectable({
  providedIn: 'root'
})

export class RepositorySandboxService {

  isActiveLoader$: Observable<boolean> = this.store.select(selectLoader);
  items$: Observable<IRepository[]> = this.store.select(selectFilteredRepositories);
  params$ = this.store.select(selectAllFilters);

  constructor(private store: Store<IAppState>) { }

  getRepositories(name: string) {
    this.store.dispatch(getRepositories({ params: { q: name }}));
  }

  setFilter(language: string) {
    this.store.dispatch(setFilter( { language }));
  }
}
