import { TestBed } from '@angular/core/testing';

import { ConsumerDataService } from './consumer-data.service';

describe('ConsumerDataService', () => {
  let service: ConsumerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
