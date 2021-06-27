import { TestBed } from '@angular/core/testing';

import { CorLoginConfigService } from './cor-login-config.service';

describe('CorLoginConfigService', () => {
  let service: CorLoginConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorLoginConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
