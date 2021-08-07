import { TestBed } from '@angular/core/testing';

import { ApplyHttpDataService } from './apply-http-data.service';

describe('ApplyHttpDataService', () => {
  let service: ApplyHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
