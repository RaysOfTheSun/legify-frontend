import { TestBed } from '@angular/core/testing';

import { LegifyI18nHttpDataService } from './legify-i18n-http-data.service';

describe('LegifyI18nHttpDataService', () => {
  let service: LegifyI18nHttpDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyI18nHttpDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
