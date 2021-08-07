import { TestBed } from '@angular/core/testing';

import { ApplyProgressService } from './apply-progress.service';

describe('ApplyProgressService', () => {
  let service: ApplyProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
