import { TestBed } from '@angular/core/testing';

import { LegifyApplyDataService } from './legify-apply-data.service';

describe('LegifyApplyDataService', () => {
  let service: LegifyApplyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
