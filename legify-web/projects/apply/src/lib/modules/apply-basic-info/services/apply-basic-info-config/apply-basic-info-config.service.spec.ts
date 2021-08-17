import { TestBed } from '@angular/core/testing';

import { ApplyBasicInfoConfigService } from './apply-basic-info-config.service';

describe('ApplyBasicInfoConfigService', () => {
  let service: ApplyBasicInfoConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyBasicInfoConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
