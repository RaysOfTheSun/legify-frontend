import { TestBed } from '@angular/core/testing';

import { LegifyApplyPersonMapperService } from './legify-apply-person-mapper.service';

describe('LegifyApplyPersonMapperService', () => {
  let service: LegifyApplyPersonMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyApplyPersonMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
