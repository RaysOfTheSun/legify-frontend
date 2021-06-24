import { TestBed } from '@angular/core/testing';

import { SystemEventService } from './system-event.service';

describe('SystemEventService', () => {
  let service: SystemEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
