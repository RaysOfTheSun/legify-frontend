import { TestBed } from '@angular/core/testing';

import { ApplyUsaService } from './apply-usa.service';

describe('ApplyUsaService', () => {
  let service: ApplyUsaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyUsaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
