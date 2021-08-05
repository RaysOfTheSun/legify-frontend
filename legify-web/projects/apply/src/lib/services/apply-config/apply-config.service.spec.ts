import { TestBed } from '@angular/core/testing';

import { ApplyConfigService } from './apply-config.service';

describe('ApplyConfigService', () => {
  let service: ApplyConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
