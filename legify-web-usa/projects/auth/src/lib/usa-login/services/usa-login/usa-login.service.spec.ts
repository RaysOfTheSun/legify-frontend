import { TestBed } from '@angular/core/testing';

import { UsaLoginService } from './usa-login.service';

describe('UsaLoginService', () => {
  let service: UsaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
