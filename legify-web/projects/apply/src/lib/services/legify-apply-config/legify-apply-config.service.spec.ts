import { TestBed } from '@angular/core/testing';

import { LegifyApplyConfigService } from './legify-apply-config.service';

describe('LegifyApplyConfigService', () => {
  let service: LegifyApplyConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
