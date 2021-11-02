import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchRepositoriesService } from '../../shared/services/search-repositories.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IExtendedRepository } from '../../interfaces/extended-repository-interface';
import { Title } from '@angular/platform-browser';
import { share, tap } from 'rxjs/operators';

@Component({
  selector: 'repository-comp',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoryComponent {
  name = this.activateRoute.snapshot.params['name'];
  item$: Observable<IExtendedRepository> = this.searchRepositoriesService.getRepository(this.name).pipe(
    share(),
    tap(({ full_name }) => this.title.setTitle(full_name))
  );

  constructor(
    private searchRepositoriesService: SearchRepositoriesService,
    private activateRoute: ActivatedRoute,
    private title: Title
  ) { }
}
