import { TestBed } from '@angular/core/testing';

import { CorApplyConfigService } from './cor-apply-config.service';

describe('CorApplyConfigService', () => {
  let service: CorApplyConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorApplyConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
