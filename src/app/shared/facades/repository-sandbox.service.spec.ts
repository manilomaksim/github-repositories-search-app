import { TestBed } from '@angular/core/testing';

import { RepositorySandboxService } from './repository-sandbox.service';

describe('RepositorySandboxService', () => {
  let service: RepositorySandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorySandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
