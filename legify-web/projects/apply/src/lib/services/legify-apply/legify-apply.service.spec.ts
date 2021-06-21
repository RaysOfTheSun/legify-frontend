import { TestBed } from '@angular/core/testing';

import { LegifyApplyService } from './legify-apply.service';

describe('LegifyApplyService', () => {
  let service: LegifyApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
