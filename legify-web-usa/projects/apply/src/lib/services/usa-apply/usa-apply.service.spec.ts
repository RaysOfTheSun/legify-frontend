import { TestBed } from '@angular/core/testing';

import { UsaApplyService } from './usa-apply.service';

describe('UsaApplyService', () => {
  let service: UsaApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
