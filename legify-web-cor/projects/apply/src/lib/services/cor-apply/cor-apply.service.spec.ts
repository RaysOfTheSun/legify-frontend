import { TestBed } from '@angular/core/testing';

import { CorApplyService } from './cor-apply.service';

describe('CorApplyService', () => {
  let service: CorApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
