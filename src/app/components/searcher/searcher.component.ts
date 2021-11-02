import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SearchRepositoriesService } from '../../shared/services/search-repositories.service';
import { IRepository } from '../../interfaces/repository-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, take, takeUntil } from 'rxjs/operators';
import { RepositorySandboxService } from '../../shared/facades/repository-sandbox.service';
import { Title } from '@angular/platform-browser';

type Params = { name: string, language: string };

@Component({
  selector: 'searcher-comp',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearcherComponent implements OnInit, OnDestroy {
  private readonly SEARCH_DEBOUNCE_TIME_MS = 500;
  searchForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    language: ['']
  });

  isActiveLoader$: Observable<boolean> = this.sandboxService.isActiveLoader$;
  items$: Observable<IRepository[]> = this.sandboxService.items$;
  params$: Observable<Params> = this.sandboxService.params$;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private searchRepositoriesService: SearchRepositoriesService,
              private sandboxService: RepositorySandboxService,
              private readonly title: Title
              ) { }

  ngOnInit(): void {
    this.title.setTitle('Repositories');
    this.searchForm.valueChanges
      .pipe(
        debounceTime(this.SEARCH_DEBOUNCE_TIME_MS),
        takeUntil(this.destroy$)
      )
      .subscribe(({ name, language }) => {
        this.sandboxService.getRepositories(name);
        this.sandboxService.setFilter(language);
        const langTitle = language ? `[${language}]` : '';
        this.title.setTitle(`Repos | ${langTitle} ${name} `);
      });

    this.params$
      .pipe(take(1))
      .subscribe(({name, language}) => {
        this.searchForm.setValue(
          { name, language },
          { emitEvent: false }
        );
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
