import { TestBed } from '@angular/core/testing';

import { LegifyApplyHttpDataService } from './legify-apply-http-data.service';

describe('LegifyApplyHttpDataService', () => {
  let service: LegifyApplyHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
