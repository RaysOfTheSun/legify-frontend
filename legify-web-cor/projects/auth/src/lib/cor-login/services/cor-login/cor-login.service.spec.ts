import { TestBed } from '@angular/core/testing';

import { CorLoginService } from './cor-login.service';

describe('CorLoginService', () => {
  let service: CorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
