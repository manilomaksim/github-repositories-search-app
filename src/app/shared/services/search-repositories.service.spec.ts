import { TestBed } from '@angular/core/testing';

import { SearchRepositoriesService } from './search-repositories.service';

describe('SearchRepositoriesService', () => {
  let service: SearchRepositoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRepositoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
