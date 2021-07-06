import { TestBed } from '@angular/core/testing';

import { LegifyTranslationService } from './legify-translation.service';

describe('LegifyTranslationService', () => {
  let service: LegifyTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
