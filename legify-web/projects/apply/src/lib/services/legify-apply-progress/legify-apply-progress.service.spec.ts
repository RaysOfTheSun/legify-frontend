import { TestBed } from '@angular/core/testing';

import { LegifyApplyProgressService } from './legify-apply-progress.service';

describe('LegifyApplyProgressService', () => {
  let service: LegifyApplyProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
