import { TestBed } from '@angular/core/testing';

import { UsaApplyConfigService } from './usa-apply-config.service';

describe('UsaApplyConfigService', () => {
  let service: UsaApplyConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaApplyConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
