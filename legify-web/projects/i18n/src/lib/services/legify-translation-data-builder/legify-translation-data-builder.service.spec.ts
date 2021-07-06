import { TestBed } from '@angular/core/testing';

import { LegifyTranslationDataBuilderService } from './legify-translation-data-builder.service';

describe('LegifyTranslationDataBuilderService', () => {
  let service: LegifyTranslationDataBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegifyTranslationDataBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
