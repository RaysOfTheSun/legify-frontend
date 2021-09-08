import { TestBed } from '@angular/core/testing';

import { ApplyDataService } from './apply-data.service';

describe('ApplyDataService', () => {
  let service: ApplyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
