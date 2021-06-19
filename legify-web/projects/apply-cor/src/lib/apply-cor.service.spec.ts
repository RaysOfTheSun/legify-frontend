import { TestBed } from '@angular/core/testing';

import { ApplyCorService } from './apply-cor.service';

describe('ApplyCorService', () => {
  let service: ApplyCorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyCorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
