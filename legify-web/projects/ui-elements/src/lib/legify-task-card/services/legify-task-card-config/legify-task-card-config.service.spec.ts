import { TestBed } from '@angular/core/testing';

import { LegifyTaskCardConfigService } from './legify-task-card-config.service';

describe('LegifyTaskCardConfigService', () => {
  let service: LegifyTaskCardConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyTaskCardConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
