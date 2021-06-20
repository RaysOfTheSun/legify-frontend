import { TestBed } from '@angular/core/testing';

import { LegifyLoginService } from './legify-login.service';

describe('LegifyLoginService', () => {
  let service: LegifyLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
