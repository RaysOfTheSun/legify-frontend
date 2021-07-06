import { TestBed } from '@angular/core/testing';

import { LegifyI18nConfigService } from './legify-i18n-config.service';

describe('LegifyI18nConfigService', () => {
  let service: LegifyI18nConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyI18nConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
