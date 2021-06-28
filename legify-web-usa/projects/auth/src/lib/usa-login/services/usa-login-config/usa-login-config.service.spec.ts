import { TestBed } from '@angular/core/testing';

import { UsaLoginConfigService } from './usa-login-config.service';

describe('UsaLoginConfigService', () => {
  let service: UsaLoginConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaLoginConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
