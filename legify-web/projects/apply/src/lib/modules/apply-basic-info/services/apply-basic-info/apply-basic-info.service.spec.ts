import { TestBed } from '@angular/core/testing';

import { ApplyBasicInfoService } from './apply-basic-info.service';

describe('ApplyBasicInfoService', () => {
  let service: ApplyBasicInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyBasicInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
