import { TestBed } from '@angular/core/testing';

import { LegifyLoginConfigService } from './legify-login-config.service';

describe('LegifyLoginConfigService', () => {
  let service: LegifyLoginConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyLoginConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
